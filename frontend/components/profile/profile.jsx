import React from 'react';
import CheckinIndexItem from '../check_ins/checkin_index_item';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCheckIns()
    this.props.fetchUser(this.props.profileId);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.checkInId !== this.props.match.params.checkInId) {
      this.props.fetchCheckIn(this.props.match.params.checkInId)
    }
  }

  

  render() {
    const sessionId = this.props.sessionId;
    const { username } = this.props;
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.author_id === sessionId);
    const total = checkIn_arr.length ? checkIn_arr.length : 0;
    const uniqueHash = {};
    // const uniqueCount = checkIn_arr.length ? checkIn_arr.forEach(checkin => {
    //   if (!uniqueHash[checkin.drink_id]) uniqueHash[checkin.drink_id] = 0;
    //   uniqueHash[checkin.drink_id]++;
    // })
    //   const unique = Object.keys(uniqueHash).length;
    const uniqueCount = checkIn_arr.length ? checkIn_arr.forEach(checkin => {
      if (!uniqueHash[checkin.drink_id]) uniqueHash[checkin.drink_id] = 0;
      uniqueHash[checkin.drink_id]++;
    }) : "";
    const unique = Object.keys(uniqueHash).length;
    return (
      <div id="slide">
        <div className="cont-profile-page">

      <div className="main">

      <div className="profile-cover">
            <img className="profile-image" src={window.profile} alt=""/>
            <div className="profile-content">
              <p className="profile-username">{username}</p>
              <div className="profile-stats">
                  <div className="profile-total-drinks">
                    <p>TOTAL</p>
                    <p id="total">{total}</p>
                  </div>
                  <div className="profile-unique-drinks">
                    <p>UNIQUE</p>
                    <p id="unique">{unique}</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="box-activity">
            <div className="box-content">
              <div className="filters">
              </div>
                <h3 className="global-recent-activity">Your Recent Activity</h3>
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
     
    )
  }

}


export default Profile;