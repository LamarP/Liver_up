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
import BarDetailContainer from './bars/bar_detail_container';
import BarIndexContainer from './bars/bar_index_container';
import CheckInShowContainer from './check_ins/check_in_show_container';
import NavBarContainer from './nav/navbar_container';
import ProfileContainer from './profile/profile_container';
import CheckinIndexContainer from './check_ins/checkin_index_container';
// import Home from './home';
import Modal from './modal/modal';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);
const App = () => (
  <div>
      
    <Modal />
    <NavBarContainer />
    <div>

    <GreetingContainer/>
    </div>
    <Switch> 
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path='/thedive' component={CheckinIndexContainer} />   
      <ProtectedRoute exact path="/drinks" component={DrinkIndexContainer}/>
      <ProtectedRoute exact path="/drinks/:drinkId" component={DrinkDetailContainer} />
      <ProtectedRoute exact path='/bars' component={BarIndexContainer}/>
      <ProtectedRoute exact path='/bars/:barId' component={BarDetailContainer}/>
      <ProtectedRoute exact path="/checkIns/:checkInId" component={CheckInShowContainer} /> 
      <ProtectedRoute exact path='/profiles/:profileId' component={ProfileContainer}/>
       {/* <ProtectedRoute exact path="/checkIns/:checkInId/edit" component={EditCheckInContainer} /> */}

      
    </Switch>
  </div>
);

export default App;
