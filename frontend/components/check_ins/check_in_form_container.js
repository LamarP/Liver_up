import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCheckIn } from '../../actions/check_in_actions';
import CheckInForm from './check_in_form';
import {closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.id,
    // drinkId: ownProps.drinkId,
    drink: state.entities.drinks[ownProps.match.params.drinkId],

    errors: state.errors.checkin
  }
};
const mapDispatchToProps = dispatch => ({
  createCheckIn: checkIn => dispatch(createCheckIn(checkIn)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckInForm));