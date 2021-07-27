import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../ratings/ratings';



class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteCheckIn = this.deleteCheckIn.bind(this);
  }


  deleteCheckIn(e) {
    e.preventDefault();
    this.props.deleteCheckIn(this.props.checkInId)
  }

  render() {
    const {checkIn, sessionId} = this.props;
    const showDelete = checkIn.author_id === sessionId ? "show-delete" : "hide-delete"
    console.log(this.props);
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">

          <p>
            <Link to={`/profiles/${checkIn.author_id}`}>{checkIn.user.username}</Link> is drinking a <Link to={`/drinks/${checkIn.drink.id}`}>{checkIn.drink.drink_name}</Link> by <Link to={`/bars/${checkIn.drink.bar_id}`}>{checkIn.bar}</Link>
          </p>
        </div>
        <div className="checkin-item-row-2">
          <div className="checkin-item-tri"></div>
          <div className="checkin-body">
            <p>{checkIn.body}</p>
            <div className="checkin-body-bottom">
              <Rating rating={checkIn.rating}/>
              <p>{checkIn.drink.drink_style}</p>
            </div>
          </div>
        </div>
        <div className="checkin-item-row-3">
          <div className="checkin-item-links">
            <p>{newDateFormat}</p>
            <Link to={`/check_ins/${checkIn.id}`}>View Detailed Check-in</Link>
            <div className={showDelete}>
              <Link to={`/check_ins`} onClick={this.deleteCheckIn}>Delete Check-in</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckinIndexItem;