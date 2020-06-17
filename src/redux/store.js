import { createStore } from "redux";
import { categories, products } from "../data/dummydata";
import { reducer } from "./reducer";

const initialState = {
  categories: categories,
  products: products,
  cartItems: [],
  toggleDropdown: false,
};

export const store = createStore(reducer, initialState);
