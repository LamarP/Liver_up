import React from 'react';
// import { Link, Route } from 'react-router-dom';
import CheckInIndex from '../check_ins/checkin_index';
import CheckInFormContainer from '../check_ins/check_in_form_container';
import CheckInIndexContainer from '../check_ins/checkin_index_container';
import CheckInIndexItem from '../check_ins/check_in_item';
import CheckinIndexItem from '../check_ins/checkin_index_item';
import CheckIn from '../check_ins/check_in_item_container';
class DrinkDetail extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId)
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
    if (!this.props.drink) return null;
    const drink = this.props.drink;
    const drinkId = parseInt(this.props.match.params.drinkId);
    const checkIns = this.props.checkIns;
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.drink_id === drinkId);


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
          <div className="stats">
            <p>
              <span className="stat">TOTAL</span>
              <span className="count">4,204</span>
            </p>
            <p>
              <span className="stat">UNIQUE</span>
              <span className="count">5,304</span>
            </p>
            <p>
              <span className="stat">MONTHLY</span>
              <span className="count">24</span>
            </p>
            <p>
              <span className="stat">YOU</span>
              <span className="count">0</span>
            </p>
          </div>
          <div className="details">
                <p className="abv">{this.props.drink.abv} ABV</p>
                <p className="ibu">12 ibu</p>
                {/* <p>{this.props.drink.average_rating || 'No reviews yet'}</p> */}
               
                <div className="caps" data-rating="3.47423">
                <div className="cap-100"></div>
                <div className="cap-100"></div>
                <div className="cap-100"></div>
                <div className="cap-50"></div>
                <div className="cap"></div>
                </div>
                <span className="num">(3.47)</span>
                <p className="ratings">2,788 Ratings </p>
          </div>
          <div className="bottom">
                <div className="actions">
                <button onClick={() => this.props.openModal({ modal: 'checkin', drinkId: drinkId})} className="drink-checkin-btn">
                  <div id="checkin-tag" className="checkin-tag hidden">
                    <div id="checkin-tag-tri"></div>
                      <div id="checkin-tag-txt">Check-in this Drink</div>
                      <div className="checkmark"><div className="check-mark"></div></div>
                  </div>
                </button>

            </div>
            <div className="desc">
              <p>
                {this.props.drink.description}
              </p>
            </div>
            <div className="clear-fix"></div>
          </div>
      </div>
    </div>
          </div>
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
     
    )
  }
}
export default DrinkDetail;



