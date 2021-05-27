import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
// import Splash from './splash/splash';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DrinkIndexContainer from './drinks/drink_index_container';
import DrinkDetailContainer from './drinks/drink_detail_container';
import Home from './home';
import Modal from './modal/modal';
const App = () => (
  <div>
    <Modal />
    <GreetingContainer/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      
      <ProtectedRoute exact path="/drinks" component={DrinkIndexContainer}/>
      <ProtectedRoute exact path="/drink/:drinkId" component={DrinkDetailContainer} />
      {/* <Route path="/" component={Home} /> */}
      
    </Switch>
  </div>
);

export default App;
