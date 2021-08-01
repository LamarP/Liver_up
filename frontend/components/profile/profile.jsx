import React from 'react';
import CheckinIndex from '../check_ins/checkin_index';
import { Link } from 'react-router-dom';
import CheckInIndexContainer from '../check_ins/checkin_index_container';
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCheckIns()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.drinkId !== this.props.match.params.drinkId) {
      this.props.fetchDrink(this.props.match.params.drinkId)
    }
    if (prevProps.match.params.checkInId !== this.props.match.params.checkInId) {
      this.props.fetchCheckIn(this.props.match.params.checkInId)
    }
  }

  render() {
    const authorId = parseInt(this.props.match.params.userId)
    const checkIns = this.props.checkIns;
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.author_id === authorId);
    return (
      <div>
                    <div className="checkins">    <ul>
          {/* {
             checkIn_arr.map((checkIn) => (
            <CheckIn
            key={`checkIn${checkIn.id}`}
                 checkIn={checkIn} />
            ))
          } */}
          <CheckInIndexContainer
          checkIns={drink.checkIns ? drink.checkIns : {}}
          fetchCheckIns={this.props.fetchCheckIns}
          fetchCheckIn={this.props.fetchCheckIn}
          sessionId={this.props.currentUser}
          deleteCheckIn={this.props.deleteCheckIn}

        />
                </ul>
                </div>
      </div>
    )
  }

}


export default Profile;