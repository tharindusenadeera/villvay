import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux"
import reduxThunk from "redux-thunk";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SiteIndex from "./components/site";
import rootReducer from "./reduces";


export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
<Provider store={store}>
    <App >
        <Router onUpdate={() => console.log("updated")}>
            <switch>
                <Route exact path="/" component={SiteIndex} />
            </switch>
        </Router>
    </App>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
