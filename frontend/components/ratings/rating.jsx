const drunks = () => {};

import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  displayRating() {
    let r = this.props.rating;
    if (r === 1) {
      return window.oneDrunk;
    } else if (r === 2) {
      return window.twoDrunks;
    } else if (r === 3) {
      return window.threeDrunks;
    } else if (r === 4) {
      return window.fourDrunks;
    } else if (r === 5) {
      return window.fiveDrunks;
    } else {
      return window.zeroDrunks;
    }
  }

  render() {
    return <div id="rating-view">{this.displayRating()}</div>;
  }
}

export default Rating;
