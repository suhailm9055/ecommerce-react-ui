import React from "react";
import "./App.css";
import Announcements from "./components/Announcements";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import MobileLogin from "./pages/MobileLogin";
import GoogleLogin from "./pages/GoogleLogin";
import User from "./pages/User";

function App() {
  const user = useSelector((store) => store.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          
          {user ? <Cart /> : <Redirect to="/login" />}
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/productList/:category">
          <ProductList />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/login/mobile">
          {user ? <Redirect to="/" /> : <MobileLogin />}
        </Route>
        <Route exact path="/user/:UserId">
          {user ? <User /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login/google">
          {user ? <Redirect to="/" /> : <GoogleLogin />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
