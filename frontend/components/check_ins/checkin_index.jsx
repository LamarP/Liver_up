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
    this.props.fetchCheckIns();

  }

  render() {
    const { checkIns } = this.props;
    // const checkIns = this.props.checkIns;
    const checkIn_arr = Object.values(checkIns);
    // const drink = this.props.drink;
    // const drinkId = drink.id;
    // const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.drink_id === drinkId);
    return (
        // <div id="slide">
        // <li className="checkin-index-item-container">
        //     {
        //   checkIn_arr.map((checkIn) => (
        //   <CheckinIndexItem
        //   key={checkIn.id + checkIn.rating}
        //   checkIn={checkIn}
        //   checkInId={checkIn.id}
        //   sessionId={this.props.sessionId}
        //   deleteCheckIn={this.props.deleteCheckIn}
        //   fetchUser={this.props.fetchUser ? this.props.fetchUser : ""}
        //   profileId={this.props.profileId ? this.props.profileId : ""}
        // />
            

        //   ))}
        // </li>
        
        // </div>
        <div id="slide">
        <div className="cont-drink-page">

      <div className="main">

      <div className="box-drink-page">
        <div className="content">
        
        <div className="box-activity">
        <div className="box-content">
          <div className="filters">
            {/* <span>Sort by:</span>
            <span className="current">Global</span>
            <span><a>Friends</a></span>
            <span><a>You</a></span> */}
          </div>
            <h3 className="global-recent-activity">Global Recent Activity</h3>
          <div className="checkins">    <ul>
      {
         checkIn_arr.map((checkIn) => (
        <CheckinIndexItem
        key={`checkIn${checkIn.id}`}
             checkIn={checkIn}
             checkInId={checkIn.id}
             sessionId={this.props.sessionId}
             deleteCheckIn={this.props.deleteCheckIn}
             fetchUser={this.props.fetchUser ? this.props.fetchUser : ""}
             profileId={this.props.profileId ? this.props.profileId : ""}
           />
        ))
      }

            </ul>
            </div>
    </div>
  </div>
        </div>
        </div>
        </div>
        </div>
        </div>

      )
      

  }
}

export default CheckinIndex;