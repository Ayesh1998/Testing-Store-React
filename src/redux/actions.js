export const addToCart = (item) => ({
  type: "ADD_CART",
  payload: item,
});

export const toggleDropdown = () => ({
  type: "TOGGLE_DROPDOWN",
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE_CART",
  payload: item,
});
