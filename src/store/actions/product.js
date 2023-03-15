export const GET_SHOW_PRODUCT = "GET_SHOW_PRODUCT";

export const getIsProductShown = (isShown) =>({
  type: GET_SHOW_PRODUCT,
  payload: isShown,
})