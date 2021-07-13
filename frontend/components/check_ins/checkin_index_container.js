import { connect } from 'react-redux';
import CheckInIndex from './checkin_index';
import { fetchCheckIns, deleteCheckIn, fetchCheckIn } from '../../actions/check_in_actions';
import {fetchAllDrinks} from '../../actions/drink_actions';
const mapStateToProps = (state, ownProps) => ({
  checkIns: state.entities.checkIns,
  currentUserId: state.session.currentUserId,
  drinks: Object.values(state.entities.drinks),
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: () => dispatch(fetchCheckIns()),
  deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(checkInId)),
  fetchCheckIn: checkinId => dispatch(fetchCheckIn(checkinId)),
  fetchAllDrinks: () => dispatch(fetchAllDrinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckInIndex);

