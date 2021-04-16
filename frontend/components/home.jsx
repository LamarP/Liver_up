import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DrinkIndexContainer from './drinks/drink_index_container';
import DrinkDetailContainer from './drinks/drink_detail_container';
import GreetingContainer from './greeting/greeting_container';
const Home = () => {
  return (
    <div>
      <GreetingContainer/>
    <Switch>
        
      <ProtectedRoute exact path="/home" component={DrinkIndexContainer} />
      <ProtectedRoute exact path="/drink/:drinkId" component={DrinkDetailContainer} />
    </Switch>
    </div>
  )
}


export default Home;