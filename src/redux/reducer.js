import {
  addToCartLogic,
  afterAddToCartLogic,
  toggleDropdown,
  removeCartItems,
  removeItemformCart,
} from "./logics";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartItems: addToCartLogic(state.cartItems, action.payload),
        products: afterAddToCartLogic(state.products, action.payload),
      };
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        toggleDropdown: toggleDropdown(state.toggleDropdown),
      };
    case "REMOVE_CART":
      return {
        ...state,
        cartItems: removeCartItems(state.cartItems, action.payload.id),
        products: removeItemformCart(state.products, action.payload),
      };

    default:
      return state;
  }
};
