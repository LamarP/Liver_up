import React from 'react';
import { Link } from 'react-router-dom';




class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteCheckIn = this.deleteCheckIn.bind(this);

  }

  deleteCheckIn(e) {
    e.preventDefault();
    this.props.deleteCheckIn(this.props.checkInId);
  }

 

  render() {
    const {checkIn, sessionId} = this.props;
    const showDelete = checkIn.author_id === sessionId ? "show-delete" : "hide-delete"
    let drunks_arr = [];
    let r = this.props.checkIn.rating;
    if (r === 1) {
      drunks_arr.push (window.oneDrunk);
    } else if(r === 2) {
      drunks_arr.push (window.twoDrunks);
    } else if (r === 3) {
      drunks_arr.push (window.threeDrunks);
    } else if (r === 4) {
      drunks_arr.push (window.fourDrunks);
    } else if (r === 5) {
      drunks_arr.push (window.fiveDrunks);
    } else {
      drunks_arr.push (window.zeroDrunks);
    }
    let drunks = drunks_arr[0];
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">
        <div><img className="profile-pic" src={window.profile}alt="" /></div>
        {/* <div><img className="profile-pic" src={checkIn.author.img_url}alt={window.profile} /></div> */}
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
            <div className="checkin-body-bottom"> 
            <img className="check-rating-img" src={drunks} width='30%' height="auto" />
             </div>
          </div>
        </div>
        <div className="checkin-item-row-3">
          <div className="checkin-image-container"><img className="checkin-image" src={checkIn.photoUrl}/></div>
          <div className="checkin-item-links">

            {/* <Link to={`/check_ins/${checkIn.id}`}>View Detailed Check-in</Link> */}
            <div>
              <Link className={showDelete} to={`/check_ins`} onClick={this.deleteCheckIn}>Delete Check-in</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckinIndexItem;