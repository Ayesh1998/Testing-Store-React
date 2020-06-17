import React from "react";
import "./category-selector-item-styles.css";

const CategorySelectorItem = ({ name, url, active, activeFunction, id }) => {
  var idname = "something";
  if (active === 1) {
    idname = "active";
    console.log("active");
  }
  return (
    <div
      onClick={() => activeFunction(id)}
      className="col-lg-2 col-md-2 col-sm-2 col-2 CategorySelectorItem"
      id={idname}
      style={{ textAlign: "center", padding: "20px", cursor: "pointer" }}
    >
      <img
        src={url}
        alt=""
        style={{ width: "87%", height: " 67% ", cursor: "pointer" }}
      />
      <p className="categorySelectItemName" style={{}}>
        {name}
      </p>
    </div>
  );
};

export default CategorySelectorItem;
