import React from "react";
import { withRouter } from "react-router-dom";

class CheckInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: "",
      drink_id: this.props.drinkId,
      author_id: this.props.authorId,
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDrinkShow = this.handleSubmit.bind(this);
  }

  navigateToDrinkShow() {
    const url = `/drinks/${this.props.match.params.drinkId}`;
    this.props.history.push(url);
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('checkin[rating]', this.state.rating);
    formData.append('checkin[body]', this.state.body);
    formData.append('checkin[drink_id]', this.state.drink_id);
    formData.append('checkin[author_id]', this.state.author_id);
    if (this.state.photoFile) {
      formData.append('checkin[photo]', this.state.photoFile);
    }
    this.props.createCheckIn(formData);
    this.props.closeModal();
    this.props.history.push("/thedive");
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} />
    ) : null;
    const showRating = (rating) => {
      if (rating === "1") return "1";
      if (parseInt(rating) > 1) return `${rating}`;
      else return "No Rating";
    };
    const rateDrunks = (rating) => {
      if (rating === "1") return "drunk";
      if (parseInt(rating) > 1) return `drunks`;
    };
    return (
      <div className="checkin-modal-container">
        <div className="checkin-modal-box">
          <div className="checkin-form-top">
            <h3>
              Check-In
              <button
                className="checkin-modal-x"
                onClick={this.props.closeModal}
              >
                X
              </button>
            </h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <br />

            <div className="check-form-middle">
              <div className="checkin-comment-box">
                <input
                  className="checkin-comment"
                  type="text"
                  placeholder="What did you think?"
                  value={this.state.body}
                  onChange={this.update("body")}
                />
              </div>
              <label className="photo-upload-button">
                <img className="camera" src={window.camera} />
                <input type="file" onChange={this.handleFile.bind(this)} />
                <h3>Image preview </h3>
                {preview}
              </label>
            </div>
            <div className="rate-drink">
              <label>Rating</label>
              <br />
              <div className="slider-box">
                <input
                  className="slider"
                  type="range"
                  onChange={this.update("rating")}
                  value={this.state.rating}
                  min="0"
                  max="5"
                />
                <div className="show-rating-box">
                  <div className="show-rating">
                    {showRating(this.state.rating)}
                  </div>
                  <div>{rateDrunks(this.state.rating)}</div>
                </div>
              </div>
            </div>
            <br />

            <br />
            <input className="checkin-form-button" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckInForm);
