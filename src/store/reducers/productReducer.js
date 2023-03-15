import { GET_SHOW_PRODUCT } from "src/store/actions/product";

const initialState = {
  showProduct: false,
};


export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOW_PRODUCT: {
      return { ...state, showProduct: action.payload };
    }
    default: 
      return state;
  }
};

