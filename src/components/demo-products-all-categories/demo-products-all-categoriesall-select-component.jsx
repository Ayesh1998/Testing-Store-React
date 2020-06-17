import React, { useState } from "react";
import { categories } from "../../data/dummydata";
import CategorySelectorItem from "../category-selector-item/category-selector-item-component";

const DemoProductsAllCategories = (props) => {
  const [categoriesstate, setCategoriesstate] = useState(categories);

  const activeFunction = (ids) => {
    console.log("active function");
    var activePrevious = categoriesstate.find((item) => item.active === 1);
    var activePreviousTemp = {
      ...activePrevious,
      active: 0,
    };

    console.log(activePreviousTemp);
    var activeNow = categoriesstate.find((item) => item.id === ids);
    var activeNowtemp = {
      ...activeNow,
      active: 1,
    };
    console.log(activeNowtemp);
    var stateTemp = categoriesstate;
    var indexActivePrevious = stateTemp.findIndex((item) => item.active === 1);
    var filteredPreviousActive = stateTemp.filter((item) => item.active !== 1);
    filteredPreviousActive.splice(indexActivePrevious, 0, activePreviousTemp);

    var indexActiveNow = filteredPreviousActive.findIndex(
      (item) => item.id === ids
    );
    var filteredNowActive = filteredPreviousActive.filter(
      (item) => item.id !== ids
    );
    filteredNowActive.splice(indexActiveNow, 0, activeNowtemp);

    console.log(filteredNowActive);
    setCategoriesstate(filteredNowActive);
  };

  return (
    <div className="row">
      {categoriesstate.map((item) => {
        return (
          <CategorySelectorItem
            name={item.name}
            url={item.url}
            active={item.active}
            id={item.id}
            activeFunction={activeFunction}
          />
        );
      })}
    </div>
  );
};

export default DemoProductsAllCategories;
