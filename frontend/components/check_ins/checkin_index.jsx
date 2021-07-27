// import React from 'react';
// import CheckInIndexItem from './check_in_item';
// import CheckInFormContainer from './check_in_form_container';

// class CheckInIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.fetchCheckIns();
//   }

//   render() {
//     const {checkIns, deleteCheckIn} = this.props;
//     const checkIns_arr = Object.values(checkIns);
//     return (
//       <div>
//         <section>
//         <ul>
//           {
//             checkIns_arr.map(checkIn => (<CheckInIndexItem
//                                       checkIn={checkIn}
//                                       deleteCheckIn={deleteCheckIn}
//                                       key={checkIn.id}
//             />))

//           }
//         </ul>
//         {/* <CheckInFormContainer /> */}

//         </section>
//       </div>
//     );
//   }
// }

// export default CheckInIndex;

import React from 'react';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {

      return (
        <li className="checkin-index-item-container">
          <CheckinIndexItem
            key={checkIn.id + checkIn.rating}
            checkIn={checkIn}
            checkInId={checkIn.id}
            sessionId={this.props.sessionId}
            deleteCheckIn={this.props.deleteCheckIn}
            fetchUser={this.props.fetchUser ? this.props.fetchUser : ""}
            profileId={this.props.profileId ? this.props.profileId : ""}
          />
        </li>
      )
      

  }
}

export default CheckinIndex;