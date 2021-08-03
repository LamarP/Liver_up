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
      {/* <CheckInIndexContainer
          // checkIns={drink.checkIns ? drink.checkIns : {}}
          // checkIns={checkIn_arr ? checkIn_arr : {}}
          // fetchCheckIns={this.props.fetchCheckIns}
          // fetchCheckIn={this.props.fetchCheckIn}
          // sessionId={this.props.currentUser}
          // deleteCheckIn={this.props.deleteCheckIn}

        /> */}

export default Home;