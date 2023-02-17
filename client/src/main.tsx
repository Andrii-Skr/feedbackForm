import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { cStore } from "./store/store";

const StyledGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Apercu Arabic Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #2d2d2d;
  
}
`;

const store = cStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <StyledGlobal />
        <App />
      </>
    </Provider>
  </React.StrictMode>
);
