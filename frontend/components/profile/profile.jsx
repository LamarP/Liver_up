import React from 'react';
import CheckinIndexItem from '../check_ins/checkin_index_item';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCheckIns()
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.checkInId !== this.props.match.params.checkInId) {
      this.props.fetchCheckIn(this.props.match.params.checkInId)
    }
  }

  

  render() {
    // if (!this.props.drink) return null;
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.author_id === currentUserId);

    // const checkIn_arr = Object.values(checkIns);
    // debugger
    return (
      <div id="slide">
        <div className="cont-drink-page">

      <div className="main">

      <div className="box-drink-page">

<div className="content">

    <div className="top">
          <div className="basic">
            <a className="label">
                <img className="drink-image" src={this.props.drink.img_url} alt={this.props.drink.drink_name} width='30%' height="auto" />
            </a>
            <div className="name">
                    <h1>{this.props.drink.drink_name}</h1>
                    <p className="bar-name">placeholder</p>
                    <p className="drink-type-show">{this.props.drink.drink_style}</p>  
            </div>
          </div>
            <div className="clear-fix"></div>
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