import { connect } from 'react-redux';
import React from 'react';
import DrinkIndex from './drink_index';
import { fetchAllDrinks } from '../../actions/drink_actions';
import { selectAllDrinks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  drinks: state.entities.drinks
}) 


const mapDispatchToProps = dispatch => ({
  fetchAllDrinks: () => dispatch(fetchAllDrinks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrinkIndex);

