import { connect } from 'react-redux';
import { fetchDrink } from './../../actions/drink_actions';
import { fetchCheckIns } from './../../actions/check_in_actions';
import DrinkDetail from "./drink_detail";

const mapStateToProps = (state, ownProps) => {
 
  return {
    drink: state.entities.drinks[ownProps.match.params.drinkId]
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrink: (drinkId) => dispatch(fetchDrink(drinkId)),
    fetchCheckIns: () => dispatch(fetchCheckIns())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail);