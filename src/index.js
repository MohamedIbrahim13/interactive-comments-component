import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

const configStore = () => {
  const middleware = [thunk.withExtraArgument()];
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middleware)
  );
  const store = legacy_createStore(rootReducer, createStoreWithMiddleware);
  return store;
};

const store = configStore();

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
