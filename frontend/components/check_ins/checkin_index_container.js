import { connect } from 'react-redux';
import CheckInIndex from './checkin_index';
import { fetchCheckIns, deleteCheckIn } from '../../actions/check_in_actions';

const mapStateToProps = (state, ownProps) => ({
  checkIns: state.entities.checkIns
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: () => dispatch(fetchCheckIns()),
  deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(drinkId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckInIndex);

