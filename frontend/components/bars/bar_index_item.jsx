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
        <Link to={`/bar/${this.props.bar.id}`}>
          {/* <img src={this.props.bar.img_url}/> */}
          
          <span className="bar-name">{this.props.bar.bar_name}</span>
        </Link>
          
          
          <span className="bar-style">{this.props.bar.bar_style} </span>
        
        <span className="bar-description">{this.props.bar.description}</span>
        
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