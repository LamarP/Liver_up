import React from 'react';
// import { Link, Route } from 'react-router-dom';
import CheckinIndexItem from '../check_ins/checkin_index_item';
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
    const sessionId = this.props.sessionId;
    const drink = this.props.drink;
    const drinkId = parseInt(this.props.match.params.drinkId);
    const checkIns = this.props.checkIns;
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.drink_id === drinkId);
    const total = checkIn_arr.length ? checkIn_arr.length : 0;
    const uniqueHash = {};
    const youHash = {};
    const userCheckIns = {}
    console.log(this.props);
    const uniqueCount = checkIn_arr.length ? checkIn_arr.forEach(checkin => {
      if (!uniqueHash[checkin.drink_id]) uniqueHash[checkin.drink_id] = 0;
      uniqueHash[checkin.drink_id]++;
    }) : "";
    const youCount = checkIn_arr.length ? checkIn_arr.forEach(checkin => {
      if (!youHash[checkin.author_id] && checkin.author_id === sessionId) youHash[checkin.author_id] = 0;
      youHash[checkin.author_id]++;
    }) : "";
    const unique = Object.keys(uniqueHash).length;
    const you = Object.keys(youHash).length;
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
              {/* <span className="stat">TOTAL</span>
              <span className="count">4,204</span> */}
              <span className="stat">TOTAL</span>
              <span className="count" id="total">{total}</span>
                    
            </p>
            <p>
              <span className="stat">UNIQUE</span>
              <span className="count" id="unique">{unique}</span>
            </p>
            <p>
              <span className="stat">MONTHLY</span>
              <span className="count">24</span>
            </p>
            <p>
              <span className="stat">YOU</span>
              <span className="count" id="count">{you}</span>
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
                  {/* <div id="checkin-tag" className="checkin-tag hidden"> */}

                      {/* <div id="checkin-tag-txt">Check-in this Drink</div> */}
                        {/* </div> */}
                        <img className="check-image" src={window.check}alt="" />
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



