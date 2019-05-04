import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import todoApp from './reducers/todoAdd';
import App from './App';
import Terry from './Terry';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const terryStore = createStore(
    todoApp,
    // thunkMiddleware 不給也可以 work, 加 'thunkMiddleware' 的用意是?
    // 好吧先找了文章: https://medium.com/frochu/%E9%80%81%E8%AE%93%E4%BD%A0%E7%9A%84action%E8%83%BD%E4%BD%9C%E6%9B%B4%E5%A4%9A-redux-thunk-c07bc5488e48
    // 但還是沒有很懂他的用途
    // applyMiddleware(thunkMiddleware, logger)
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider
        store={terryStore}
    >
        <App />
        {/* 為了測試不同元件也可以拿到資料,  所以創了 Terry 元件 */}
        <Terry />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
