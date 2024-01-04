import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { CartEmpty } from "./pages/CartEmpty";

import "./scss/app.scss";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route exact path="/">
            <Route path="/" exact element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart-empty" element={<CartEmpty />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
