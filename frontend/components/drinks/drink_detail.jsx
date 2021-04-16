import React from 'react';

class DrinkDetail extends React.Component{

  componentDidMount() {
  this.props.fetchDrink(this.props.match.params.drinkId)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.drinkId !== this.props.match.params.drinkId) {
      this.props.fetchDrink(this.props.match.params.drinkId)
    }
  }

  render() {
    if (!this.props.drink) return null;
    return (
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
        </ul>
      </section>
    )
  }
}

export default DrinkDetail;