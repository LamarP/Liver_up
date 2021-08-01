
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/profile_actions';
import { fetchCheckIns, fetchCheckIn, deleteCheckIn } from '../../actions/check_in_actions';

const mapStateToProps = (state, ownProps) => ({
  profile: state.entities.profile,
  profileId: ownProps.match.params.profileId,
  sessionId: state.session.id,
  checkIns: state.entities.checkIns
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchCheckIns: () => dispatch(fetchCheckIns()),
  fetchCheckIn: (checkinId) => dispatch(fetchCheckIn(checkinId)),
  deleteCheckIn: (checkinId) => dispatch(deleteCheckIn(checkinId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));