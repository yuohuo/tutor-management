import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import router from './routers'
import modelIndex from './models'
import createHistory from 'history/createBrowserHistory'

import dva from 'dva';
let app = new dva({
    history: createHistory()
})

app.router(router)

app.model(modelIndex)

app.start('#root')

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
