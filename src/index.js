import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

    ,
  document.getElementById('root')
);

