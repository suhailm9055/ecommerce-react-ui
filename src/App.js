import React from "react";
import './App.css';
import Announcements from './components/Announcements';
import Slider from './components/Slider';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const user = true;
  return (
   <Router>
     <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route  path="/cart">
    <Cart/>
    </Route>
    <Route  path="/product/:id">
    <Product/>
    </Route>
    <Route  path="/productList/:category">
    <ProductList/>
    </Route>
    <Route  path="/login">
      {user?<Redirect to="/"/>:<Login/>}
    
    </Route>
    <Route  path="/register">
      {user?<Redirect to="/"/>:<Register/>}
    
    </Route>

     </Switch>

   </Router>
  );
}

export default App;
