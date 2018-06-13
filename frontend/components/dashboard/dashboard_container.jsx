import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCity } from '../../actions/location_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = { id: "", username: "", image_url: "", location_id: ""}
  let currentUser = currentUser || defaultUser;
  const defaultCity = { id: "", name: "", img_url: "", users: [] };
  const city = state.entities.location[currentUser.location_id] || defaultCity;
  return { city, currentUser }
};

const mapDispatchToProps = dispatch => {
  return {
    getAddress: cityId => dispatch(getCity(cityId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
