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
      <div className="drink-show-container">
        
        <div className="drink-show">
          <div className="drink-content">
            <div className="drink-row-1">
              <div className="drink-row-1-content"></div>
          <img className="drink-image" src={this.props.drink.img_url} alt={this.props.drink.drink_nam} width='30%' height="auto" />
            <h2>{this.props.drink.drink_name}</h2>

            </div>

          </div>

          </div>

        {/* <ul>
          <li>{this.props.drink.drink_style}</li>
          <li>{this.props.drink.base_spirit}</li>
          <li>{this.props.drink.abv}</li>
          <li>{this.props.drink.description}</li>
          <li>{this.props.drink.average_rating || 'No reviews yet'}</li>
        </ul> */}
        
    <br/>
        
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



