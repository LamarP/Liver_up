import React from "react";
import CheckinIndexItem from "../check_ins/checkin_index_item";
import DrinkIndexItem from "../drinks/drink_index_item";
class BarDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBar(this.props.match.params.barId);
    this.props.fetchCheckIns();
    this.props.fetchAllDrinks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.barId !== this.props.match.params.barId) {
      this.props.fetchBar(this.props.match.params.barId);
    }
    if (
      prevProps.match.params.checkInId !== this.props.match.params.checkInId
    ) {
      this.props.fetchCheckIn(this.props.match.params.checkInId);
    }
  }

  render() {
    if (!this.props.bar) return null;

    const checkIn_arr = Object.values(this.props.checkIns).filter(
      (checkIn) => checkIn.barId === this.props.bar.id
    );
    const { drinks } = this.props;
    const drink_arr = Object.values(drinks).filter(
      (drink) => drink.bar_id === this.props.bar.id
    );
    return (
      <div id="slide">
        <div className="bar-header">
          <div className="bar-header-intro">
            <div className="bar-show-details">
              <h1 className="bar-show-name">{this.props.bar.name}</h1>
              <p className="bar-location">{this.props.bar.location}</p>
              <p className="bar-type-show">{this.props.bar.style}</p>
            </div>
          </div>
        </div>
        <div className="cont-bar-page">
          <div className="bar-details-left">
            <h3 className="drink-menu">Drink Menu</h3>
            <div className="bar-drinks">
              <ul>
                {drink_arr.map((drink) => (
                  <DrinkIndexItem key={`drink${drink.id}`} drink={drink} />
                ))}
              </ul>
            </div>
          </div>
          <div className="bar-checkins">
            <h3 className="global-recent-activity">Recent Activity</h3>{" "}
            <ul>
              {checkIn_arr.map((checkIn) => (
                <CheckinIndexItem
                  key={`checkIn${checkIn.id}`}
                  checkIn={checkIn}
                  checkInId={checkIn.id}
                  sessionId={this.props.sessionId}
                  deleteCheckIn={this.props.deleteCheckIn}
                  fetchUser={this.props.fetchUser ? this.props.fetchUser : ""}
                  profileId={this.props.profileId ? this.props.profileId : ""}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default BarDetail;
