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
          {/* <img src={this.props.drink.img_url}/> */}
          
          <span className="drink-name">{this.props.drink.drink_name}</span>
          
          <br />
          <span className="drink-style">{this.props.drink.drink_style}</span>
        </Link>
      </li>
    )
  }
}

export default DrinkIndexItem;