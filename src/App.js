import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Testimonial from "../src/Pages/Testimonial";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Testimonial} />
        {/* <Route path="/story1" exact component={Story1} />
        <Route path="/story4" exact component={Story4} />
        <Route path="/story5" exact component={Story5} />
        <Route path="/story6" exact component={Story6} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
