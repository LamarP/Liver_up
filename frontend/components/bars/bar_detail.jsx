import React from 'react';
// import { Link, Route } from 'react-router-dom';
import CheckInIndex from '../check_ins/checkin_index';
import CheckInFormContainer from '../check_ins/check_in_form_container';
import CheckInIndexContainer from '../check_ins/checkin_index_container';
import CheckInIndexItem from '../check_ins/check_in_item';
import CheckIn from '../check_ins/check_in_item_container';
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
    const bar = this.props.bar;
    const barId = parseInt(this.props.match.params.barId);
    // const checkIns = this.props.checkIns;
    const checkIn_arr = Object.values(this.props.checkIns).filter(checkIn => checkIn.drink_id === barId);
    // const checkIn_arr = Object.values(checkIns);
    // debugger
    return (
      <div id="slide">
        <div className="cont-bar-page">

      <div className="main">

      <div className="box-bar-page">

<div className="content">

    <div className="top">
          <div className="basic">
            <a className="label">
                <img className="bar-image" src={this.props.bar.img_url} alt={this.props.bar.name} width='30%' height="auto" />
            </a>
            <div className="name">
                    <h1>{this.props.bar.name}</h1>
                    <p className="bar-name">placeholder</p>
                    <p className="bar-type-show">{this.props.bar.style}</p>  
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
                {/* <p>{this.props.bar.average_rating || 'No reviews yet'}</p> */}
                <span className="num">(3.47)</span>
                <p className="ratings">2,788 Ratings </p>
          </div>
          <div className="bottom">
                {/* <div className="actions">
                <button onClick={() => this.props.openModal({ modal: 'checkin', barId: barId})} className="bar-checkin-btn">
                  <div id="checkin-tag" className="checkin-tag hidden">
                    <div id="checkin-tag-tri"></div>
                      <div id="checkin-tag-txt">Check-in this Bar</div>
                      <div className="checkmark"><div className="check-mark"></div></div>
                  </div> */}
                {/* </button> */}

            </div>
            <div className="desc">
              <p>
                {this.props.bar.description}
              </p>
            </div>
            <div className="clear-fix"></div>
          </div>
      </div>
    </div>
          </div>
          <div className="box-activity">
            {/* <div className="box-content">
              <div className="filters">
                <span>Sort by:</span>
                <span className="current">Global</span>
                <span><a>Friends</a></span>
                <span><a>You</a></span>
              </div>
                <h3>Global Recent Activity</h3> */}
              <div className="checkins">    <ul>
          {/* {
             checkIn_arr.map((checkIn) => (
            // <CheckIn
            // key={`checkIn${checkIn.id}`}
            //      checkIn={checkIn} />
            ))
          } */}
          <CheckInIndex
          checkIns={bar.checkIns ? bar.checkIns : {}}
          fetchCheckIns={this.props.fetchCheckIns}
          fetchCheckIn={this.props.fetchCheckIn}
          sessionId={this.props.currentUser}
          deleteCheckIn={this.props.deleteCheckIn}

        />
                </ul>
                </div>
        </div>
      {/* </div> */}
    </div>
  {/* </div> */}
</div>
     
    )
  }
}
export default BarDetail;