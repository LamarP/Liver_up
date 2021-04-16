import { connect } from 'react-redux';
import { fetchDrink } from './../../actions/drink_actions';
import DrinkDetail from "./drink_detail";

const mapStateToProps = (state, ownProps) => {
  return {
    drink: state.entities.drinks[ownProps.match.params.drinkId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrink: (drinkId) => dispatch(fetchDrink(drinkId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetail);