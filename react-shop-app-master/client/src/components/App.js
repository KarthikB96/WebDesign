import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import MenTshirt from './views/LandingPage/MenTshirt.js';
import MenShirt from './views/LandingPage/MenShirt.js';
import MenJeans from './views/LandingPage/MenJeans.js';
import MenShoes from './views/LandingPage/MenShoes.js';
import MenAccessories from './views/LandingPage/MenAccessories.js';

import WomenDresses from './views/LandingPage/WomenDresses.js';
import WomenTops from './views/LandingPage/WomenTops.js';
import WomenJeans from './views/LandingPage/WomenJeans.js';
import WomenShoes from './views/LandingPage/WomenShoes.js';
import WomenAccessories from './views/LandingPage/WomenAccessories.js';

import Kitchen from './views/LandingPage/Kitchen.js';
import Bath from './views/LandingPage/Bath.js';
import Bedroom from './views/LandingPage/Bedroom.js';
function App() {
  return (
    <React.Fragment>
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          {/* <Route path="/home" component={Home}/> */}
          <Route path="/mentshirt" component={MenTshirt}/>
          <Route path="/menshirt" component={MenShirt}/>
          <Route path="/menjeans" component={MenJeans}/>
          <Route path="/menshoes" component={MenShoes}/>
          <Route path="/menaccessories" component={MenAccessories}/>
          <Route path="/womendresses" component={WomenDresses}/>
          <Route path="/womentops" component={WomenTops}/>
          <Route path="/womenjeans" component={WomenJeans}/>
          <Route path="/womenshoes" component={WomenShoes}/>
          <Route path="/womenaccessories" component={WomenAccessories}/>
          <Route path="/kitchen" component={Kitchen}/>
          <Route path="/bath" component={Bath}/>
          <Route path="/bedroom" component={Bedroom}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
    </React.Fragment>
  );
}

export default App;
