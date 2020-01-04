import React from 'react';
import {
  Route,
} from "react-router-dom";

import HomePage from './HomePage';
import prepareHomePage from './HomePage.data';
import MoviePage from './MoviePage';
import prepareMoviePage from './MoviePage.data';

const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
    loadData: prepareHomePage
  },
  {
    exact: true,
    path: "/movie/:movieId",
    component: MoviePage,
    loadData: prepareMoviePage
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => {
        let data = {};
        if (route.loadData) {
          data = route.loadData(props.match.params);
        }
        return (
          <route.component {...props} {...data} routes={route.routes} />
        )
      }}
    />
  );
}

export {
  routes,
  RouteWithSubRoutes
}