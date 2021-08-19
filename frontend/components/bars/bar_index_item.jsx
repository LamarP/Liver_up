import React from 'react';
import { Link } from 'react-router-dom';

class BarIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render(){

    return (
      <div>
        <ul>
      <li className="bar-index-item">
        <Link to={`/bars/${this.props.bar.id}`}>
          {/* <img src={this.props.bar.img_url}/> */}
          
          <span className="bar-name">{this.props.bar.name}</span>
        </Link>
          
          
          <span className="bar-style">{this.props.bar.style} </span>
        
        <span className="bar-location">{this.props.bar.location}</span>
        
        </li>

        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
    )
  }
}

export default BarIndexItem;