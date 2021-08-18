
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/profile_actions';
import { fetchCheckIns, fetchCheckIn, deleteCheckIn } from '../../actions/check_in_actions';
import { fetchDrink } from './../../actions/drink_actions';
import { openModal } from '../../actions/modal_actions';
const mapStateToProps = (state, ownProps) => ({
  profile: state.entities.profile,
  profileId: ownProps.match.params.profileId,
  sessionId: state.session.id,
  checkIns: state.entities.checkIns,

})

const mapDispatchToProps = dispatch => ({
  fetchDrink: (drinkId) => dispatch(fetchDrink(drinkId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchCheckIns: () => dispatch(fetchCheckIns()),
  openModal: modal => dispatch(openModal(modal)),
  fetchCheckIn: (checkinId) => dispatch(fetchCheckIn(checkinId)),
  deleteCheckIn: (checkinId) => dispatch(deleteCheckIn(checkinId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));