import React from "react";
import { Link } from "react-router-dom";
import ProfileContainer from "../profile/profile_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;

    if (currentUser === undefined) {
      return null;
    } else {
      return (
        <div className="navbar">
          <div id="nav-links">
            <div id="logo-div">
              <Link
                to={`/profiles/${this.props.currentUser.id}`}
                className="navbar-logo"
              >
                Liver_up
              </Link>
            </div>
            <Link to="/thedive" className="navbar-dive">
              The Dive
            </Link>
            <Link to="/drinks" className="navbar-drinks">
              Drinks
            </Link>
            <Link to="/bars" className="navbar-bars">
              Bars
            </Link>
            <div className="dropdown">
              <button className="dropbtn">
                <Link to={`/profiles/${this.props.currentUser.id}`}>
                  <img className="profile-img" src={window.profile} alt="" />
                </Link>
              </button>

              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link
                      className="dropdown-link"
                      to={`/profiles/${currentUser.id}`}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-link" onClick={this.props.logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
