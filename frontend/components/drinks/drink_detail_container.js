import { connect } from 'react-redux';
import { fetchDrink } from './../../actions/drink_actions';
import { fetchCheckIns, fetchCheckIn, deleteCheckIn } from './../../actions/check_in_actions';
import DrinkDetail from "./drink_detail";
import { fetchBar } from "./../../actions/bar_actions";
import { openModal } from '../../actions/modal_actions';
const mapStateToProps = (state, ownProps) => {
  
  const drink = state.entities.drinks[ownProps.match.params.drinkId]
  let bar = null;
  if (drink) {
    bar = state.entities.bars[drink.bar_id]
  }

  return {

    drink: state.entities.drinks[ownProps.match.params.drinkId],
    checkIns: state.entities.checkIns,
    bar: bar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrink: (drinkId) => dispatch(fetchDrink(drinkId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchCheckIns: () => dispatch(fetchCheckIns()),
    fetchCheckIn: (checkInId) => dispatch(fetchCheckIn(checkInId)),
    deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(checkInId)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail);