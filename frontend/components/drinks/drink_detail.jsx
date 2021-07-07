import React from 'react';
// import { Link, Route } from 'react-router-dom';
import CheckInFormContainer from '../check_ins/check_in_form_container';
import CheckInIndexContainer from '../check_ins/checkin_index_container';
class DrinkDetail extends React.Component{

  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.drinkId)
    this.props.fetchCheckIns(this.props.match.params.checkInId)
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
    return (
      <div className="box-drink-page">

<div className="content">

    <div className="top">
          <div className="basic">
            <a className="label">
                <img className="drink-image" src={this.props.drink.img_url} alt={this.props.drink.drink_nam} width='30%' height="auto" />
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
            <p>{this.props.drink.average_rating || 'No reviews yet'}</p>
            <p>2,788 Ratings</p>
          </div>
          <div className="bottom">
            <div className="actions">
            <a>CHECK</a>
            <a>ADD</a>
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
    
    
    

<div className="checkin-form">
  <CheckInFormContainer />
</div>
<section>
<CheckInIndexContainer/>
</section>

</div>
     
    )
  }
}
export default DrinkDetail;



