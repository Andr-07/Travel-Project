import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { createStore } from 'redux';

import App from './components/app/app';
import reducers from '../redux/reducers';


const store = createStore(reducers);

const Index = () => (
  <CookiesProvider >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CookiesProvider >
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
