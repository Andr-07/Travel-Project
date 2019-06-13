import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';


const Index = () => (
<BrowserRouter>
  <App appName='React Router Challenge: Yelp Restaurants Clone'/>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
