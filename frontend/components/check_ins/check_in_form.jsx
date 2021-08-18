import React from 'react';
import { withRouter } from 'react-router-dom';

class CheckInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: '',
      drink_id: this.props.drinkId,
      author_id: this.props.authorId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
 

  handleSubmit(e) {
    e.preventDefault();
    const drinkId = parseInt(this.props.location.pathname.split('/')[2]);
    const checkIn = Object.assign({}, this.state, {
      drink_id: drinkId
    });
    this.props.createCheckIn(checkIn);
    this.props.closeModal();
    this.props.history.push('/home');
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }
  
  render() {
    return (
      <div className="checkin-modal-container">
      <div className="checkin-modal-box">
        <div className="checkin-form-top">
          <h3>Check-In
            <button className="checkin-modal-x" onClick={this.props.closeModal}>X</button>
          </h3>
        </div>
        <form onSubmit={this.handleSubmit} >
          <br/>

          {/* <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
            className="checkin-comment"  
          /> */}
            <div className="checkin-comment-box">
                  <input className="checkin-comment"
                  type="text"
                  placeholder="What did you think?"
                  value={this.state.body}
                  onChange={this.update('body')}
                  />

            </div>
            <div className="rate-drink">
          <label>Rating</label>
              <br />
              <div>
                <input
                  className="slider"
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />

              </div>

            </div>
          <br/>

          <br/>
          <input type="submit" />
        </form>
      </div>

      </div>
    );
 }
}

export default withRouter(CheckInForm);