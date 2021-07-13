import React from 'react';
import { Link } from 'react-router-dom';

// const CheckInIndexItem = props => (
//   <li>
//     <Link to={`/checkIns/${props.checkIn.id}`}></Link>
//     <Link to={`/checkIns/${props.checkIn.id}/edit`}>Edit</Link>
//     {console.log(props)}
//     <button onClick={() => props.deleteCheckIn(checkins.checkin.id)}>Delete</button>
//   </li>
// );
class CheckInIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    // if (!this.props.checkin) return null;
    // const checkIn = this.props.drink.checkIn;
    // const { checkins } = this.props;
    const checkIns = this.props.checkIns
    return (
 



      <div>
        <div className="checkin-author">{this.props.checkIn.author_id}</div>
        {/* <div className="checkin-author">{this.props.users[this.props.checkIn.author_id].username}</div> */}
        <div className="checkin-body">{this.props.checkIn.body}</div>
        <div className="checkin-rating">{this.props.checkIn.rating}</div>
      </div>
   


    )
  }
}
export default CheckInIndexItem;