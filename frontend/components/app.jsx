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
import Modal from './modal/modal';
const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />

    </Switch>
  </div>
);

export default App;
