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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="checkin-index-item">
      {/* <Link to={`/drink/${this.props.checkIn.id}`}> */}
        <span>{this.props.checkIn.body}</span>
        <br/>
        {/* <img src={this.props.drink.img_url}/> */}
    
          <span>{this.props.checkIn.rating}</span>
          <br />
        <span>{this.props.checkIn.user}</span>
      {/* </Link> */}
    </li>
    )
  }
}
export default CheckInIndexItem;