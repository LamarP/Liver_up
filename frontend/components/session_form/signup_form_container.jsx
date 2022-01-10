import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { clearSessionErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    greeting: "Already a regular?"
    // navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button type="button" onClick={() => {dispatch(openModal({modal:"login"}))}}>Login</button>
    ),
    clearErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
