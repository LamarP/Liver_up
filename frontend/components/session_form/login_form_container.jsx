import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { clearSessionErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    greeting: "New around here?"
    // navLink: <Link to="/signup">Sign up!</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button type="button" onClick={() => dispatch(openModal({modal: "signup"}))}>Signup</button>
    ),
    clearErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
