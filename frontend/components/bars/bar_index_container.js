import { connect } from 'react-redux';
import React from 'react';
import BarIndex from './bar_index';
import { fetchAllBars } from '../../actions/bar_actions';


const mapStateToProps = (state, ownProps) => ({
  bars: state.entities.bars,
  drinks: state.entities.drinks,
  drink: state.entities.drinks[ownProps.match.params.drinkId],
  bar: state.entities.bars[ownProps.match.params.barId],
  checkIns: state.entities.checkIns
}) 


const mapDispatchToProps = dispatch => ({
  fetchDrink: (drinkId) => dispatch(fetchDrink(drinkId)),
  fetchAllDrinks: (drinks) => dispatch(fetchAllDrinks(drinks)),
  fetchAllBars: () => dispatch(fetchAllBars()),
  fetchBar: (barId) => dispatch(fetchBar(barId)),
  openModal: modal => dispatch(openModal(modal)),
  fetchCheckIns: () => dispatch(fetchCheckIns()),
  fetchCheckIn: (checkInId) => dispatch(fetchCheckIn(checkInId)),
  deleteCheckIn: (checkInId) => dispatch(deleteCheckIn(checkInId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BarIndex);