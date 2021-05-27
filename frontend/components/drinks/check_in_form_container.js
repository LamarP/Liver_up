import { connect } from 'react-redux';

import { createCheckIn } from '../../actions/check_in_actions';
import CheckInForm from './check_in_form';

const mapDispatchToProps = dispatch => ({
  createCheckIn: checkIn => dispatch(createCheckIn(checkIn))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckInForm);