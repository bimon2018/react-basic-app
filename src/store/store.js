import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "src/store/reducers";

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f ;

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);

export const store = createStore(reducer, enhancer);
