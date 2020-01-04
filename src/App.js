import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { routes, RouteWithSubRoutes } from './route';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Suspense fallback="Loading...">
          <Router>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
