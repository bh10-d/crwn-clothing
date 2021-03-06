import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = ()=>(
  <div>
    <h1>HATS PAGE</h1>  
  </div>
);

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}
// exact mac dinh la true (exact cho duogn dan tuyet doi khi ma duong dan dung y nhu the thi moi vao duoc)
// react-router-dom v6 chuyen Switch thanh Routes
//cu phap react-router-dom v6 <Route exact path="/" element={<HomePage />} />
//cu phap react-router-dom v6 tro xuong <Route exact path="/" component={HomePage} />
export default App;
