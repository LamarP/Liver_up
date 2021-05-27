import React from 'react';
import { withRouter } from 'react-router-dom';

class CheckInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDrinkShow = this.navigateToDrinkShow.bind(this);
  }

  navigateToDrinkShow() {
    const url = `/drinks/${this.props.match.params.drinkId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const drinkId = parseInt(this.props.match.params.drinkId);
    const checkIn = Object.assign({}, this.state, {
      drink_id: drinkId
    });
    this.props.createCheckIn(checkIn);
    this.navigateToDrinkShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="checkIn-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToDrinkShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(CheckInForm);