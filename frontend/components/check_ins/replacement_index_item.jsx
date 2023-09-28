import React from 'react';
import { Link } from 'react-router-dom';




class ReplaceIndexItem extends React.Component {
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
        
      </div>
    )
  }
}

export default ReplaceIndexItem;