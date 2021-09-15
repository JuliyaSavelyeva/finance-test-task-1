import React from 'react';
import { Provider } from 'react-redux';
import Tickers from './components/Tickers.jsx';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <Tickers />
  </Provider>
);

export default App;
