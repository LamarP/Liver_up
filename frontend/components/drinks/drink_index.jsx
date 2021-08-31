import React from "react";
import DrinkIndexItem from "./drink_index_item";
import { Route } from "react-router-dom";
import DrinkDetailContainer from "./drink_detail_container";
class DrinkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllDrinks();
  }

  render() {
    const { drinks } = this.props;
    const drink_arr = Object.values(drinks);
    console.log(drink_arr);

    return (
      <div className="drinks">
        <Route path="/drinks/:drinkId" component={DrinkDetailContainer} />
        <ul>
          {drink_arr.map((drink) => (
            <DrinkIndexItem key={`drink${drink.id}`} drink={drink} />
          ))}
        </ul>
      </div>
    );
  }
}

export default DrinkIndex;
