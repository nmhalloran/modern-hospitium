import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCity } from '../../actions/location_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => {
  const defaultCity = { id: "", name: "", img_url: "", users: [] };
  const city = state.entities.location[currentUser.location_id] || defaultCity;
  return { city }
};

const mapDispatchToProps = dispatch => {
  return {
    getAddress: cityId => dispatch(getCity(cityId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
