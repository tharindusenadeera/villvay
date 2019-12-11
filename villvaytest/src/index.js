import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import reduxThunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import SiteIndex from "./components/site";
import LandingIndex from "./components/landing";
import LogIn from "./components/user/login";
import SignUp from "./components/user/signup";
import rootReducer from "./reduces";
import App from './App';
import './index.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"


export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
<Provider store={store}>
    <App >
        <Router onUpdate={() => console.log("updated")}>
            <Switch>
                <Route exact path="/" component={LandingIndex} />
                <Route exact path="/home" component={SiteIndex} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </Router>
    </App>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
