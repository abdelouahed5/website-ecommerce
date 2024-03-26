export const addCart = (product) => ({
    type: "ADD_ITEM",
    payload: product
  });
  
  export const delCart = (product) => ({
    type: "DELE_ITEM",
    payload: product
  });