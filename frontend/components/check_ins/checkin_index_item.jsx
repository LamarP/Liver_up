import React from 'react';
import { Link } from 'react-router-dom';




class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteCheckIn = this.deleteCheckIn.bind(this);

  }
  // componentDidMount() {
  //   this.props.fetchDrink(this.props.match.params.drinkId)
  //   this.props.fetchCheckIns()
  // }
  
  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.drinkId !== this.props.match.params.drinkId) {
  //     this.props.fetchDrink(this.props.match.params.drinkId)
  //   }
  //   if (prevProps.match.params.checkInId !== this.props.match.params.checkInId) {
  //     this.props.fetchCheckIn(this.props.match.params.checkInId)
  //   }
  // }

  deleteCheckIn(e) {
    e.preventDefault();
    this.props.deleteCheckIn(this.props.checkInId);
  }

 

  render() {

    const {checkIn, sessionId} = this.props;
    const showDelete = checkIn.author_id === sessionId ? "show-delete" : "hide-delete"
    const rating = this.props.checkIn.rating;
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
    console.log(drunks);
     

 
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
            <div className="checkin-body-bottom"> 
            <img className="rating_img" src={drunks} width='30%' height="auto" />
             </div>
          </div>
        </div>
        <div className="checkin-item-row-3">
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