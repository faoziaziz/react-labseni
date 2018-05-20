import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import kartuGuys from './Utama';
import sarappPage from './SARapp/SARappPage.js';
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => kartuGuys
  },
  {
    path: "/sarapp",
    sidebar: () => <div>bubblegum!</div>,
    main: () => sarappPage
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

const JalurLaman = () => (
  <Router>
        <div>
        {
          routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))
      }
        </div>

  </Router>
);

export default JalurLaman;
