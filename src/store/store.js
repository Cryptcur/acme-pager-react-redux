import { createStore, applyMiddleware } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";

import { LOAD_EMPLOYEES } from "./actionConstants";

const initialState = {
  employees: [],
  count: 0
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      console.log("IN STORE!!!!", action.employees);
      return action.employees;
  }
  return state;
};

const store = createStore(
  reducer,
  applyMiddleware(thunks, createLogger({ collapsed: true }))
);
export default store;
