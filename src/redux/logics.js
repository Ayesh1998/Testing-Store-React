export const addToCartLogic = (products, item) => {
  return [...products, { ...item, cartAdded: 1 }];
};

export const afterAddToCartLogic = (products, item) => {
  var indexs = products.findIndex((itemz) => itemz.id === item.id);
  var filtereds = products.filter((itemz) => itemz.id !== item.id);
  filtereds.splice(indexs, 0, { ...item, cartAdded: 1 });
  return filtereds;
};

export const toggleDropdown = (toggle) => {
  var temp = !toggle;
  console.log(temp);
  return temp;
};
export const removeCartItems = (cart, id) => {
  var filteredd = cart.filter((itemz) => itemz.id !== id);
  return filteredd;
};

export const removeItemformCart = (products, item) => {
  var indexs = products.findIndex((itemz) => itemz.id === item.id);
  var filtereds = products.filter((itemz) => itemz.id !== item.id);

  filtereds.splice(indexs, 0, { ...item, cartAdded: 0 });
  return filtereds;
};
