import React from 'react';
import { Link } from 'react-router-dom'; 


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
                            <button className="dropbtn"><Link to={`/users/${this.props.currentUser.id}`}>Menu</Link>
                    </button>
                            <div></div>
                            <div className="dropdown-content">
                            <Link className="dropdown-link" to={`/users/${this.props.currentUser.id}`}>Profile</Link>
                                <a className="dropdown-link" onClick={this.props.logout}>Logout</a>
                            </div>
                  
                </div>
             
                
      
                    </div>
                 
                </div>

            )
        }
    }
}

export default Navbar;

