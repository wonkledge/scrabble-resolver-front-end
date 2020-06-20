import React from 'react';
import {Route, Switch} from "react-router-dom";
import {NotFound} from "./components/NotFound";
import Home from "./views/Home";

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
