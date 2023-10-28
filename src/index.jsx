import React from "react";
import ReactDOM from "react-dom/client";
import { compose } from 'redux';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./services/reducers/root-reducer";
// import store from "./services/store/store";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = configureStore({
  reducer: rootReducer,
  // enhancers: composeEnhancers
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
