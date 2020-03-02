import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";

export default function App() {
  return (
    <Router>
      <div>
        {/*  <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:permalink*" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}
