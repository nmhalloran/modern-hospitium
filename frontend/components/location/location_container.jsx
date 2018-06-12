import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCity } from '../../actions/location_actions';
import Location from './location';

const mapStateToProps = (state, ownProps) => {
  // console.log("mstp", state);
  // console.log("mstp", ownProps);
  const defaultCity = { id: "", name: "", img_url: "" };
  const city = state.entities.location[ownProps.match.params.id] || defaultCity;
  return { city };
};

const mapDispatchToProps = dispatch => {
  return {
    getCity: cityId => dispatch(getCity(cityId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);