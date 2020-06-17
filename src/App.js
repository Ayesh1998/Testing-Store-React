import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Headerone from "./components/headerone/headerone-component";
import HeaderTwo from "./components/headertwo/headertwo-compomponent";
import HeaderThree from "./components/headerthree/headerthree-component";
import Faq from "./pages/faq/faq-page";
import Aboutus from "./pages/aboutus/aboutus";
import Pricing from "./pages/pricing/pricing-page";
import Contactus from "./pages/contactus/contactus-page";
import Footer from "./components/footer/footer-component";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Montserrat" }}>
      <Provider store={store}>
        <Headerone />
        <HeaderTwo />
        <HeaderThree />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contactus" component={Contactus} />

          <Redirect to="/" />
        </Switch>

        <Footer />
      </Provider>
    </div>
  );
}

export default App;
