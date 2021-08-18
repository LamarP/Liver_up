import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../ratings/ratings';


class CheckInShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchCheckIns();

  }



  render() {
    if (!this.props.checkIn) { return null
 
    } else {
      // const checkin = this.props.checkin;
      // const revealShowImg = checkin.photoURL ? "" : "hidden";


      return (
        <div className="checkin-show-container">
          <div className="checkin-show">
            <div className="checkin-show-details">
              <div className="chk-show-det-1">
                <div>
                  <p>{checkIn.user.username}</p>
                  <p>{checkIn.username}</p>
                </div>
              </div>
              <div className="chk-show-det-2">
                <div id="chk-show-2-top">
                  <img id="chk-show-drink" src={checkIn.drink.img_URL}/>
                  <div>
                    <Link id="drink" to={`/drinks/${checkIn.drink.id}`}>{checkIn.drink.drink_name}</Link>
                    <Link id="bar" to={`/bars/${checkIn.drink.bar_id}`}>{checkIn.bar_id}</Link>
                  </div>
                </div>
                <div id="chk-show-2-bottom">
                  <p>{checkIn.body}</p>
                  <div>
                    <Rating rating={checkIn.rating}/>
                    <p>{checkIn.drink.drink_style}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CheckInShow;