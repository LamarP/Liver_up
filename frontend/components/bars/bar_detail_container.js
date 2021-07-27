import { connect } from 'react-redux';
import { fetchBar, fetchAllBars } from './../../actions/bar_actions';
import { fetchDrink, fetchDrinks } from './../../actions/drink_actions';
import { fetchCheckIns, fetchCheckIn, deleteCheckIn } from './../../actions/check_in_actions';
import BarDetail from "./bar_detail";
import { openModal } from '../../actions/modal_actions';
const mapStateToProps = (state, ownProps) => {
  
  return {

    drink: state.entities.drinks[ownProps.match.params.drinkId],
    bar: state.entities.bars[ownProps.match.params.barId],
    checkIns: state.entities.checkIns
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrink: (drinkId) => dispatch(fetchDrink(drinkId)),
    fetchDrinks: (drinks) => dispatch(fetchDrinks(drinks)),
    fetchAllBars: () => dispatch(fetchAllBars()),
    fetchBar: (barId) => dispatch(fetchBar),
    openModal: modal => dispatch(openModal(modal)),
    fetchCheckIns: () => dispatch(fetchCheckIns()),
    fetchCheckIn: (checkInId) => dispatch(fetchCheckIn(checkInId)),
    deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(checkInId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarDetail);