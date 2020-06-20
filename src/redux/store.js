import {applyMiddleware, createStore, compose} from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import apiMiddleware from "../middleware/apiMiddleware";

const store = createStore(reducers, compose(applyMiddleware(apiMiddleware), composeWithDevTools()));

export default store;
