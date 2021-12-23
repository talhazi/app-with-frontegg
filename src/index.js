import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { FronteggProvider } from '@frontegg/react';
import { BrowserRouter } from 'react-router-dom';


const contextOptions = {
  baseUrl: 'https://app-tal-hazi.frontegg.com',
};

ReactDOM.render(
  <BrowserRouter>
     <FronteggProvider contextOptions={contextOptions}>
        <App />
     </FronteggProvider>
  </BrowserRouter>,
  document.getElementById('root')
);