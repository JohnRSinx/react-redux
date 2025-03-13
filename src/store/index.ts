import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;