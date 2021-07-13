import React from 'react';
import { connect } from 'react-redux';
import { fetchCheckIn } from './../../actions/check_in_actions';
import CheckInItem from './check_in_item';
import { openModal } from '../../actions/modal_actions';
// const CheckIn = ({ checkIn, author }) => {
//   const { rating, body } = checkIn;
//   return (
//     <div>
//       <ul>
//         <li>Rating: {rating}</li>
//         <li>{body} - by {author.username}</li>

//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = ({entities: { users }}, { checkIn }) => {
//   return {
//     author: users[checkIn.author_id]
//   };
// };
const mapStateToProps = (state, ownProps) => {
 
  return {
    checkin: state.entities.checkins[ownProps.match.params.checkinId],
    users: state.entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCheckIn: (checkInId) => dispatch(fetchCheckIn(checkInId)),
    openModal: modal => dispatch(openModal(modal)),
    // fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);