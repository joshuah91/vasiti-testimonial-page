import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Testimonial from "../src/Pages/Testimonial";
import ShareStory from "./Pages/ShareStory";
import StoryShare from "./Pages/StoryShare";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Testimonial} />
        <Route path="/ShareStory" exact component={ShareStory} />
        <Route path="/StoryShare" exact component={StoryShare} />
        {/* <Route path="/story5" exact component={Story5} />
        <Route path="/story6" exact component={Story6} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
