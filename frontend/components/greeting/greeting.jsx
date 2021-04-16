import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIndex from '../drinks/drink_index';
// function BGImage(props) {
//   return (
//     <div
//       style={{
//         background: "url(" + props.bg + ")",
//         height: "100%",
//         width: "100%",
//         backgroundSize: "cover"
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           height: "100vh",
//           width: "100vw",
//           backgroundColor: props.tint,
//           zIndex: "100",
//           opacity: "0.5"
//         }}
//       />
//     </div>
//   );
// }

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   width: "100vw",
//   height: "100vh"
// };


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      {/* <div style={{style:styles}}>
        
    </div> */}
      <div className="entrance_page">
        <div className="slogan">Discover and share your inner demons.</div>
      </div> 
        <div className="background-image">
          <img src={window.bg_image}alt="background image" />

      </div>
      
    <div className="login-signup">
      <div className="buttons">
        <Link to="/login">Sign in</Link>
        &nbsp;&nbsp;
        <Link to="/signup">create an account</Link>
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
     {/* <DrinkIndex/> */}
    </div>
  );
    
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
