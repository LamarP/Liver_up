import React from 'react';
import DrinkIndexItem from './drink_index_item';
import { Route } from 'react-router-dom';
import DrinkDetailContainer from "./drink_detail_container";
class DrinkIndex extends React.Component{
  constructor(props){
  super(props)
  }

  componentDidMount(){
  this.props.fetchAllDrinks()
  }
  
  render() {
    const { drinks } = this.props;
    const drink_arr = Object.values(drinks);
    
    return (
      <div className="drinks">
        
          <div className="drink-index-box">
        <section className="drink-list">
          <Route path="/drinks/:drinkId" component={DrinkDetailContainer}/>
        <ul>
          {
             drink_arr.map((drink) => (
            <DrinkIndexItem
            key={`drink${drink.id}`}
                 drink={drink} />
               
            ))
          }
        </ul>
        </section>
          </div>
      </div>
    )
  }
}



export default DrinkIndex;
