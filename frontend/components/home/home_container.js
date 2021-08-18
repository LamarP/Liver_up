import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCheckIns, fetchCheckIn, deleteCheckIn } from '../../actions/check_in_actions';
import Home from './home';

const mapStateToProps = (state, ownProps) => ({
  checkins: state.entities.checkins,
  sessionId: state.session.id,
  user: state.entities.users[state.session.id]
  
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: () => dispatch(fetchCheckIns()),
  fetchCheckIn: (checkinId) => dispatch(fetchCheckIn(checkinId)),
  deleteCheckIn: (checkinId) => dispatch(deleteCheckIn(checkinId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));