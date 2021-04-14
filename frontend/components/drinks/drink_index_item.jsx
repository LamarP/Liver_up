import React from 'react';
import { Link } from 'react-router-dom';

class DrinkIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

 

  render(){
    return(
      <li className="drink-index-item">
        <Link to={`/drink/${this.props.drink.id}`}>
          <span>{this.props.drink.id}</span>
          <span>{this.props.drink.drink_name}</span>
        </Link>
      </li>
    )
  }
}

export default DrinkIndexItem;