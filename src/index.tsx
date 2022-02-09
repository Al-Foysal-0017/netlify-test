import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Loader from "./components/loader/Loader";
import "./_base.scss";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
reportWebVitals();
