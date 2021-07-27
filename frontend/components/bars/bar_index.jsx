import React from 'react';
import BarIndexItem from './bar_index_item';
import { Route } from 'react-router-dom';
import BarDetailContainer from "./bar_detail_container";
class BarIndex extends React.Component{
  constructor(props){
  super(props)
  }

  componentDidMount(){
  this.props.fetchAllBars()
  }
  
  render() {
    const { bars } = this.props;
    const bar_arr = Object.values(bars);
    
    return (
      <div className="bars">
        
        
        
          <Route path="/bars/:barId" component={BarDetailContainer}/>
        <ul>
          {
             bar_arr.map((bar) => (
            <BarIndexItem
            key={`bar${bar.id}`}
                 bar={bar} />
               
            ))
          }
        </ul>
        
          
      </div>
    )
  }
}



export default BarIndex;