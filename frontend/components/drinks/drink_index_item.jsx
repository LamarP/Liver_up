import React from "react";
import { Link } from "react-router-dom";

class DrinkIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var Rating = require("react-rating");
    return (
      <div>
        <ul>
          <li className="drink-index-item">
            <Link to={`/drinks/${this.props.drink.id}`}>
              <span className="drink-name">{this.props.drink.drink_name}</span>
            </Link>

            <span className="drink-style">
              {this.props.drink.drink_style} - {this.props.drink.base_spirit}{" "}
              based{" "}
            </span>

            <span className="drink-description">
              {this.props.drink.description}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default DrinkIndexItem;
