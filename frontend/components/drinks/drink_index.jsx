import React from 'react';
import DrinkIndexItem from './drink_index_item';

class DrinkIndex extends React.Component{
  constructor(props){
  super(props)
  }

  componentDidMount(){
  this.props.fetchAllDrinks()
  }
  
  render() {
    const { drinks } = this.props;
    console.log(this.props);
    const drink_arr = Object.values(drinks);
    
    return (
      <div className="drink-list">
        <ul>
          {
             drink_arr.map((drink) => (
            <DrinkIndexItem
            key={`drink${drink.id}`}
            drink={drink} />
            ))
          }
        </ul>
      </div>
    )
  }
}



export default DrinkIndex;
