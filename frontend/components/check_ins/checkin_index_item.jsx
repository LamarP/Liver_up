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
    let checkInImg = checkIn.photoURL ? checkIn.photoURL : window.buds;
    let userImgId = checkIn.author_id;
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">
        <div><img className="profile-pic" src={`/assets/profile_pics/${userImgId}-user.png`}alt="" /></div>
        {/* <div><img className="profile-pic" src={checkIn.author.img_url}alt={window.profile} /></div> */}
          <div className="text">
            <p className="author-name">{checkIn.authorName} </p> is drowning in an
            <Link to={`/profiles/${checkIn.author}`}></Link>
            <Link to={`/drinks/${checkIn.drinkId}`}> {checkIn.drinkName}</Link> by <Link to={`/bars/${checkIn.barId}`}>{checkIn.barName}</Link>
          </div>
        </div>
        <div className="checkin-item-row-2">
          <div className="checkin-item-tri"></div>
          <div className="checkin-body">
          <p className="author-name">{checkIn.authorName }</p> says: <p>{ checkIn.body}</p>
            <div className="checkin-body-bottom"> 
            <img className="check-rating-img" src={drunks} width='30%' height="auto" />
            <img className="checkin-image" src={checkInImg} alt={`an image of the drink `} />
             </div>
          </div>
        </div>
        <div className="checkin-item-row-3">
          <div className="checkin-item-links">
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