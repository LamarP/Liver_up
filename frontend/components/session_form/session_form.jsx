import React from "react";
import { Link } from "react-router-dom";
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
  }
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.closeModal();
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = Object.assign(
      {},
      { username: "Handsome Devil", password: "password", email: "guest" }
    );
    this.props.processForm(demoUser);
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="liver-up">
              <Link to="/" className="header-link">
                <h1>Liver_up</h1>
              </Link>
            </div>
            <div className="slogan">
              <h3>Drink Socially(or alone)</h3>
            </div>
            <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />

              <input
                className="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
              />

              <br />
              <input
                className="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
              />
              <br />
              <input
                className="password"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update("password")}
              />
              <br />
              <span className="button yellow submit-btn">
                <input
                  className="session-submit"
                  type="submit"
                  value={this.props.formType}
                />
              </span>
              <br />
              <button
                className="demo-login-button"
                onClick={this.handleDemoUser}
              >
                Secret Entrance
              </button>
            </div>
            <ul className="nav-link">{this.props.greeting} {this.props.otherForm}</ul>
          </form>
        </div>

        <div className="overlay"></div>
      </div>
    );
  }
}

export default SessionForm;
