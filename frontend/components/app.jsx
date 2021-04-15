import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Home from './home/home';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DrinkIndexContainer from './drinks/drink_index_container';
import DrinkDetailContainer from './drinks/drink_detail_container';
import Modal from './modal/modal';
const App = () => (
  <div>
    <Modal />
    <header>
      
      {/* <GreetingContainer /> */}
    </header>
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/" component={DrinkIndexContainer} />
      <ProtectedRoute path="/drink/:drinkId" component={DrinkDetailContainer} />
      
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
