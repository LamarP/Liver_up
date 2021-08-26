import React from 'react';
// import { Link, Route } from 'react-router-dom';
import CheckInIndex from '../check_ins/checkin_index';
import CheckInFormContainer from '../check_ins/check_in_form_container';
import CheckInIndexContainer from '../check_ins/checkin_index_container';
import CheckinIndexItem from '../check_ins/checkin_index_item';
import CheckIn from '../check_ins/check_in_item_container';
import { Route } from 'react-router-dom';
class BarDetail extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBar(this.props.match.params.barId)
    this.props.fetchCheckIns()
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.barId !== this.props.match.params.barId) {
      this.props.fetchBar(this.props.match.params.barId)
    }
    if (prevProps.match.params.checkInId !== this.props.match.params.checkInId) {
      this.props.fetchCheckIn(this.props.match.params.checkInId)
    }
  }

  

  render() {
    if (!this.props.bar) return null;
    
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.barId === this.props.bar.id);
    const { drinks } = this.props;
    // const drink_arr = Object.values(this.props.drinks).filter(drink => drink.bar_id === this.props.bar.id);
    // console.log(drink_arr);
    return (

      <div id="slide">
        <div className="bar-header">
                {/* <img className="bar-image" src={this.props.bar.img_url} alt={this.props.bar.name}  /> */}
          <div className="bar-header-intro">
          <div className="bar-header-details">

            <a className="label">
            </a>
            <div className="bar-show-name">
                    <h1 className="bar-name">{this.props.bar.name}</h1>
                    <p className="bar-location">{this.props.bar.location}</p>
                    <p className="bar-type-show">{this.props.bar.style}</p>  
            </div>
          </div>

          </div>

        </div>
<div className="cont-profile-page">

          <div className="main">
            <div className="bar-body">
            <div className="bar-details-left">
              
      </div>
        <h3 className="global-recent-activity">Recent Activity</h3>
      <div className="checkins">   <ul>
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

     
    )
  }
}
export default BarDetail;

