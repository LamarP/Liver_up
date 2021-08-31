import React from "react";
import CheckinIndexItem from "./checkin_index_item";

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckIns();
  }

  render() {
    const { checkIns } = this.props;
    const checkIn_arr = Object.values(checkIns).reverse();

    return (
      <div id="slide">
        <div className="cont-drink-page">
          <div className="main">
            <div className="box-drink-page">
              <div className="content">
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
        </div>
      </div>
    );
  }
}

export default CheckinIndex;
