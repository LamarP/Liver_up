import React from 'react';
import { Link } from 'react-router-dom';

// const CheckInIndexItem = props => (
//   <li>
//     <Link to={`/checkIns/${props.checkIn.id}`}></Link>
//     <Link to={`/checkIns/${props.checkIn.id}/edit`}>Edit</Link>
//     <button onClick={() => props.deleteCheckIn(checkIns.checkIn.id)}>Delete</button>
//   </li>
// );
class CheckInIndexItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchCheckIn(this.props.match.params.checkInId)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.checkInId !== this.props.match.params.checkInId) {
      this.props.fetchCheckIn(this.props.match.params.checkInId)
    }
  }
  render() {
    if (!this.props.checkIn) return null;
    const checkIn = this.props.checkInId;
    return (
      <div className="checkin">
      <div className="checkin-top">



      <p className="checkin-text">
        <a></a>
      </p>
      <div className="checkin-comment">
      <div className="rating-serving">
      <p className="serving">

      <span>Bottle</span>
      </p>
      <div className="caps " data-rating="2.75">
      <div className="cap cap-100"></div>
      <div className="cap cap-100"></div>
      <div className="cap cap-75"></div>
      <div className="cap"></div>
      <div className="cap"></div>
      </div> </div>
      <span style="display: block; clear: both;"></span>
      </div>
      </div>
      <div className="feedback">
      <div className="actions_bar">
      </div>
      <div className="bottom">


      </div>
      <div className="cheers" style="display: none;"> <span className="count"><span>0</span></span>
      <span className="toast-list"></span>
      </div>
      <div className="comments">
      <div className="comments-container">
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
export default CheckInIndexItem;