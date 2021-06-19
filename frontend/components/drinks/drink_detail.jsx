import React from 'react';
import { Link, Route } from 'react-router-dom';
import checkInFormContainer from '../check_ins/check_in_form_container';
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
      <div>
      <section className="drink-detail">
        <figure>
          <img src={this.props.drink.img_url} alt={this.props.drink.drink_name} />
        </figure>
        <ul>
          <li><h2>{this.props.drink.drink_name}</h2></li>
          <li>{this.props.drink.drink_style}</li>
          <li>{this.props.drink.base_spirit}</li>
          <li>{this.props.drink.abv}</li>
          <li>{this.props.drink.description}</li>
          <li>{this.props.drink.average_rating || 'No reviews yet'}</li>
        </ul>
        
    <br/>
      </section>
        <section>
       <CheckInIndexContainer/>
      </section>
      </div>
    )
  }
}

export default DrinkDetail;