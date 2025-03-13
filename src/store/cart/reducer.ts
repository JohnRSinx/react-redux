import { INCREMENT_CART } from "./types";


const initialState = {
  countCart: 0,
};

export const cartReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT_CART:
      return {
        ...state,
        countCart: state.countCart + 1,
      };
    default:
      return state;
  }
};