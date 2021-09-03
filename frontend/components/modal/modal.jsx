import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CheckInFormContainer from '../check_ins/check_in_form_container'
function Modal({ modal, closeModal }) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal[0]) {
    case 'checkin':
      component = <CheckInFormContainer drinkId={modal[1]} />;
      break;
    case 'login':
      console.log("ahhhhhhh");
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  console.log(component);
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
