import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import SignUp from "./pages/SignUp";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      {/* <Route path="menu" element={<Menu />}></Route> */}
      <Route path="menu/:filterby" element={<Menu />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="newProduct" element={<NewProduct />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
