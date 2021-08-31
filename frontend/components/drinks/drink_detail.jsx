import React from "react";
import CheckinIndexItem from "../check_ins/checkin_index_item";
class DrinkDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId);
    this.props.fetchCheckIns();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.drinkId !== this.props.match.params.drinkId) {
      this.props.fetchDrink(this.props.match.params.drinkId);
    }
    if (
      prevProps.match.params.checkInId !== this.props.match.params.checkInId
    ) {
      this.props.fetchCheckIn(this.props.match.params.checkInId);
    }
  }

  render() {
    if (!this.props.drink) return null;

    const drinkId = parseInt(this.props.match.params.drinkId);
    const checkIn_arr = Object.values(this.props.checkIns).filter(
      (checkIn) => checkIn.drink_id === drinkId
    );
    const total = checkIn_arr.length ? checkIn_arr.length : 0;
    const { bar, sessionId } = this.props;
    let numRatings = 0;
    let ratingTotal = 0;
    const ratingCount = checkIn_arr.forEach((checkin) => {
      if (checkin.rating) {
        ratingTotal += checkin.rating;
        numRatings++;
      }
    });

    const average_rating =
      ratingTotal > 0 ? Math.floor(ratingTotal / numRatings) : 0;
    const uniqueHash = {};
    const youHash = {};
    let drunks_arr = [];
    let r = average_rating;
    if (r === 1) {
      drunks_arr.push(window.oneDrunk);
    } else if (r === 2) {
      drunks_arr.push(window.twoDrunks);
    } else if (r === 3) {
      drunks_arr.push(window.threeDrunks);
    } else if (r === 4) {
      drunks_arr.push(window.fourDrunks);
    } else if (r === 5) {
      drunks_arr.push(window.fiveDrunks);
    } else {
      drunks_arr.push(window.zeroDrunks);
    }
    let drunks = drunks_arr[0];
    const uniqueCount = checkIn_arr.length
      ? checkIn_arr.forEach((checkin) => {
          if (!uniqueHash[checkin.drink_id]) uniqueHash[checkin.drink_id] = 0;
          uniqueHash[checkin.drink_id]++;
        })
      : "";
    const youCount = checkIn_arr.length
      ? checkIn_arr.forEach((checkin) => {
          if (!youHash[checkin.author_id] && checkin.author_id === sessionId)
            youHash[checkin.author_id] = 0;
          youHash[checkin.author_id]++;
        })
      : "";
    const unique = Object.keys(uniqueHash).length;
    const you = Object.keys(youHash).length;
    return (
      <div id="slide">
        <div className="cont-drink-page">
          <div className="main">
            <div className="box-drink-page">
              <div className="drink-show-cont">
                <div className="top">
                  <div className="basic">
                    <a className="label">
                      <img
                        className="drink-image"
                        src={this.props.drink.img_url}
                        alt={this.props.drink.drink_name}
                        width="30%"
                        height="auto"
                      />
                    </a>
                    <div className="name">
                      <h1>{this.props.drink.drink_name}</h1>
                      <p className="bar-name">{bar.name}</p>
                      <p className="drink-type-show">
                        {this.props.drink.drink_style}
                      </p>
                    </div>
                  </div>
                  <div className="stats">
                    <p>
                      <span className="stat">TOTAL</span>
                      <span className="count" id="total">
                        {total}
                      </span>
                    </p>
                    <p>
                      <span className="stat">UNIQUE</span>
                      <span className="count" id="unique">
                        {unique}
                      </span>
                    </p>
                    <p>
                      <span className="stat">MONTHLY</span>
                      <span className="count">24</span>
                    </p>
                    <p>
                      <span className="stat">YOU</span>
                      <span className="count" id="count">
                        {you}
                      </span>
                    </p>
                  </div>
                  <div className="details">
                    <p className="abv">{this.props.drink.abv} ABV</p>
                    <p className="ibu">12 ibu</p>
                    <span className="average-rating">
                      <img className="rating_img" src={drunks} />(
                      {average_rating})
                    </span>
                    <p className="ratings">{ratingTotal} Ratings</p>
                  </div>
                  <div className="bottom">
                    <div className="actions">
                      <div className="image-wrap">
                        <img
                          onClick={() =>
                            this.props.openModal({
                              modal: "checkin",
                              drinkId: drinkId,
                            })
                          }
                          className="check-image"
                          src={window.check}
                          alt=""
                        />
                        <p className="checkin-drink">Checkin this drink!!!</p>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{this.props.drink.description}</p>
                    </div>
                    <div className="clear-fix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-activity">
              <div className="box-content">
                <div className="filters">
                </div>
                <h3 className="global-recent-activity">
                  Global Recent Activity
                </h3>
                <div className="checkins">
                  {" "}
                  <ul>
                    {checkIn_arr.map((checkIn) => (
                      <CheckinIndexItem
                        key={`checkIn${checkIn.id}`}
                        checkIn={checkIn}
                        checkInId={checkIn.id}
                        sessionId={this.props.sessionId}
                        deleteCheckIn={this.props.deleteCheckIn}
                        fetchUser={
                          this.props.fetchUser ? this.props.fetchUser : ""
                        }
                        profileId={
                          this.props.profileId ? this.props.profileId : ""
                        }
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DrinkDetail;
