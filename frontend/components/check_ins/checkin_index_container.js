import { connect } from 'react-redux';
import CheckInIndex from './checkin_index';
import { fetchCheckIns, deleteCheckIn, fetchCheckIn } from '../../actions/check_in_actions';
import { fetchAllDrinks } from '../../actions/drink_actions';
import { fetchAllBars } from '../../actions/bar_actions';
const mapStateToProps = (state, ownProps) => ({
  checkIns: state.entities.checkIns,
  bars: Object.values(state.entities.bars),
  currentUserId: state.session.currentUserId,
  drinks: Object.values(state.entities.drinks),
});

const mapDispatchToProps = dispatch => ({

  fetchCheckIns: () => dispatch(fetchCheckIns()),
  fetchCheckIn: checkinId => dispatch(fetchCheckIn(checkinId)),
  deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(checkInId)),
  fetchAllBars: () => dispatch(fetchAllBars()),
  fetchAllDrinks: () => dispatch(fetchAllDrinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckInIndex);

