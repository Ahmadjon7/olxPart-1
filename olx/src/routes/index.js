import React from 'react';
import Auth from './auth/Auth';
import Home from './home/Home';
import Category from './category/Category';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Route path="/category">
          <Category/>
        </Route>
      </Switch>
    );
};

export default Routes;