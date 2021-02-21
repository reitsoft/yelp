import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextRestaurantsProvider } from "./context/ContextRestaurants";

import NavBar from "../src/components/NavBar";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import RestaurantUpdate from "./routes/RestaurantUpdate";

const App = () => {
  return (
    <ContextRestaurantsProvider>
      <NavBar />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/:id/"
              component={RestaurantDetail}
            />
            <Route
              exact
              path="/restaurants/:id/update"
              component={RestaurantUpdate}
            />
          </Switch>
        </Router>
      </div>
    </ContextRestaurantsProvider>
  );
};

export default App;
