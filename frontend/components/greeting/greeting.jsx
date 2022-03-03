import React from "react";
import CheckinIndexItem from "../check_ins/checkin_index_item";
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="entrance">
          <div className="login-signup">
            <div className="buttons">
              {/* <Link to="/login">Sign in</Link> */}
              <a
                onClick={() => {
                  this.props.openModal({
                    modal: "login",
                  });
                }}
              >
                Sign in
              </a>
              &nbsp;&nbsp;
              <a
                onClick={() =>
                  this.props.openModal({
                    modal: "signup",
                  })
                }
              >
                Create an account
              </a>
              {/* <Link to="/signup">create an account</Link> */}
            </div>
            <div className="background-img-container">
              <img
                className="background-img"
                src={window.bg_image}
                alt="background image"
              />
            </div>
          </div>
          <div className="logo-box">
            <div className="liver-up-front">
              <div className="logo-img-container">
                <img className="logo-box-img" src={window.buds} alt="" />
              </div>

              <h1 className="front-name">Liver_up</h1>
              <h3 className="front-slogan">Drink Socially (or alone)</h3>
            </div>
          </div>
          <div className="short-rule-container">
            <div className="short-rule"></div>
          </div>
          <div className="discover">Discover and share your</div>
          <div className="discover-2">inner demons</div>
        </div>
      </div>
    );
  }
}
export default Greeting;
