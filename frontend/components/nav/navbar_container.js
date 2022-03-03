
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { closeModal } from "../../actions/modal_actions";
const mapStateToProps = ({ session, entities: { users } }) => {
  return {

    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);