import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

import strava from "./strava";
import dashboard from "./dashboard";
import reports from "./reports";

const reducers = combineReducers({
    strava,
    dashboard,
    reports
});

const logger = createLogger({
    collapsed: true
});

const store = createStore(reducers, load(), applyMiddleware(thunk, logger, save()));

export default store;
