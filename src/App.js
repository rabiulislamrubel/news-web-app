import './App.css';
import Sidebar from './components/Sidebar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from './components/Grid';
import List from './components/List';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Grid />,
  },
  {
    path: '/list',
    main: () => <List />,
  },
];

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='sidebar'>
          <Sidebar />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>
        <div className='right-side'>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
