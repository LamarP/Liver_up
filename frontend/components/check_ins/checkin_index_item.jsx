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
    // const {checkIn, sessionId} = this.props;
    // const showDelete = checkIn.author_id === sessionId ? "show-delete" : "hide-delete"
    const checkIn = this.props.checkIn;
    console.log(checkIn);
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">

          <p className="text">
            {checkIn.authorName} is drowning in an
            <Link to={`/profiles/${checkIn.author}`}></Link>
            <Link to={`/drinks/${checkIn.drinkId}`}> {checkIn.drinkName}</Link> by <Link to={`/bars/${checkIn.barId}`}>{checkIn.barName}</Link>
          </p>
        </div>
        <div className="checkin-item-row-2">
          <div className="checkin-item-tri"></div>
          <div className="checkin-body">
          {checkIn.authorName } says: <p>{ checkIn.body}</p>
            <div className="checkin-body-bottom"> Rating: { checkIn.rating} out of 5!
              {/* <p>{drink.drink_style}</p> */}
             </div>
          </div>
        </div>
        <div className="checkin-item-row-3">
          <div className="checkin-item-links">

            {/* <Link to={`/check_ins/${checkIn.id}`}>View Detailed Check-in</Link> */}
            <div className='delete-checkin'>
              <Link to={`/check_ins`} onClick={this.deleteCheckIn}>Delete Check-in</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckinIndexItem;