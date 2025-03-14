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

// Reducers => é uma função com 2 parametros State - Action 
//Os Reducers são funções que recebem o estado atual e uma ação, e retornam um novo estado.
//  Eles são responsáveis por atualizar o estado da aplicação com base nas ações que ocorrem.

// State = initialState

//Action => type, 

//Dispatch e useSelector 

//Dispatch 

