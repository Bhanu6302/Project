import { createStore } from "redux";
import cartReducer from "./Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(cartReducer,composeWithDevTools());

export default store;
