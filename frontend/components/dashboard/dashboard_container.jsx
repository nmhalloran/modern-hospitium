import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { geocode } from '../../actions/location_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => {
  state
  return {
    address: state.address
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddress: address => dispatch(geocode(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
