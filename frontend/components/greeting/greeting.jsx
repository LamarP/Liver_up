import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="entrance">
      <div className="login-signup">
        <div className="buttons">
          <Link to="/login">Sign in</Link>
          &nbsp;&nbsp;
          <Link to="/signup">create an account</Link>
        </div>
          <div className="background-img">
            <img className="background-img" src={window.bg_image}alt="background image" />
          </div>
      </div>
    </div>
  );
  const personalGreeting = () => (
    <div>
    <hgroup className="header-group">
      <h2 className="header-name">What up, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
     
    </div>
  );
    
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
