import React from 'react';
import { Link } from 'react-router-dom'; 
import ProfileContainer from '../profile/profile_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.currentUser === undefined) {
            return null;
        } else {
            return(
              <div className="navbar">
                <div id="nav-links">
                <div id="logo-div">
                <Link to="/" className="navbar-logo">Liver_up</Link>
                </div>
                    <Link to="/" className="navbar-dive">The Dive</Link>
                    <Link to="/drinks" className="navbar-drinks">Drinks</Link>
                    <div className="dropdown">
                            <button className="dropbtn"><Link to={`/users/${this.props.currentUser.id}`}>&#9860;</Link>
                    </button>
                            
                    <div className="dropdown-content">
                      <ul>
                        <li>
                          <ProfileContainer
                                checkIns={user.checkIns ? user.checkIns : {}}
                                fetchCheckIns={this.props.fetchCheckIns}
                                fetchCheckIn={this.props.fetchCheckIn}
                                sessionId={this.props.currentUser}
                                deleteCheckIn={this.props.deleteCheckIn}
                          />
                            {/* <Link className="dropdown-link" to={`/users/${this.props.currentUser.id}`}>Profile</Link> */}
                        </li>
                        <li>
                                <a className="dropdown-link" onClick={this.props.logout}>Logout</a>
                        </li>

                      </ul>
                            </div>
                  
                </div>
             
                
      
                    </div>
                 
                </div>

            )
        }
    }
}

export default Navbar;

