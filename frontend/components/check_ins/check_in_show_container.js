import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCheckIns } from '../../actions/check_in_actions';
import CheckInShow from './check_in_show';

const mapStateToProps = (state, ownProps) => {
  return {
    checkIn: state.entities.checkIns[ownProps.match.params.checkInId],
    checkInId: ownProps.match.params.checkInId,
    currentUser: state.session.id
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: () => dispatch(fetchCheckIns()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckInShow));