import React from 'react';
import CheckinIndex from '../check_ins/checkin_index';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.profileId);
  }

  render() {
    if (Object.keys(this.props.profile).length < 1) {
      return (
        <div>
          <img src={window.loader}/>
        </div>
      )
    } else {
      const { checkIns, id, username } = this.props.profile;
      const { sessionId, profileId, fetchUser, fetchCheckIns, fetchCheckIn, deleteCheckIn } = this.props;
      const total = checkIns ? Object.keys(checkIns).length : 0;
      // let unique = {};
      const photos = {};
      const topRatedDrinks = {};
      const uniqueCount = checkins ? Object.values(checkins).forEach(checkIn => {
        if (!unique[checkIn.drink_id]) unique[checkIn.drink_id] = 0;
        unique[checkIn.drink_id]++;
        if (checkIn.photoURL) {
          if (!photos[checkIn.id]) {
            photos[checkIn.id] = checkIn.photoURL;
          }
        }
        if(!topRatedDrinks[checkIn.rating]) topRatedDrinks[checkIn.rating] = {
          drink: checkIn.drink,
          drinkId: checkIn.drink_id,
          bar: checkIn.bar
        }
      }) : "";
      let unique = Object.keys(unique).length;
      const displayPhotos = Object.values(photos).map(photoURL => {
        return (
          <img key={photoURL} className="profile-photoURL" src={photoURL}/>
        )
      })
      const topDrinks = Object.keys(topRatedDrinks).sort().reverse().slice(0, 4).map(rating => {
        const drinkName = topRatedDrinks[rating].drink.drink_name;
        return (
          <div className="top-drinks-item">
            <img src={topRatedDrinks[rating].drink.imageURL} alt=""/>
            <div className="top-drinks-names">
              <p><Link to={`/drinks/${topRatedDrinks[rating].drinkId}`}>{drinkName}</Link></p>
              <p className="top-drink-bar">{topRatedDrinks[rating].bar}</p>
            </div>
          </div>
        )
      })
      
      return (
        <div className="profile-container">
          <div className="profile-cover">

            <div className="profile-info">
              <p className="profile-username">{username}</p>
              <div className="profile-stats">
                <div className="profile-total-drinks"><p id="total">{total}</p><p>TOTAL</p></div>
                <div className="profile-unique-drinks"><p id="unique">{unique}</p><p>UNIQUE</p></div>
              </div>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-left">
              <div className="checkIn-images">
                {displayPhotos.slice(0, 5)}
              </div>
              <div className="profile-checkins-container">
                <CheckinIndex
                  checkins={checkins ? checkins : {}}
                  fetchUser={fetchUser}
                  profileId={profileId}
                  fetchCheckIns={fetchCheckIns}
                  fetchCheckIn={fetchCheckIn}
                  sessionId={sessionId}
                  deleteCheckIn={deleteCheckIn}
                  root="profile"
                />
              </div>
            </div>
            <div className="profile-right">
              <h3>Top Beers</h3>
              <ul className="top-drinks-index">
                {topDrinks}
              </ul>
              <div className="top-drink-all">
                <Link className="top-drink-all-link" to="/drinks">See All drinks</Link>
              </div>
            </div>
          </div>
      </div>
      )
    }
  }
}

export default Profile;