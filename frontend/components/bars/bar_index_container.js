import { connect } from 'react-redux';
import React from 'react';
import BarIndex from './bar_index';
import { fetchAllBars } from '../../actions/bar_actions';


const mapStateToProps = state => ({
  bars: state.entities.bars
}) 


const mapDispatchToProps = dispatch => ({
  fetchAllBars: () => dispatch(fetchAllBars())
})

export default connect(mapStateToProps, mapDispatchToProps)(BarIndex);