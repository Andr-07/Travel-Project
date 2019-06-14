import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';


const Index = () => (
<BrowserRouter>
  <App />
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
