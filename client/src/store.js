import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import tickersReducer from './tickers/tickers.reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  tickers: tickersReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
