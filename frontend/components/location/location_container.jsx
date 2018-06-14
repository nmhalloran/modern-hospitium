import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCity, getEvents } from '../../actions/location_actions';
import Location from './location';

const mapStateToProps = (state, ownProps) => {
  const bookings = state.entities.location[ownProps.match.params.locationId] ? state.entities.location[ownProps.match.params.locationId].bookings : undefined
  const defaultUser = { id: "", username: "", image_url: "", location_id: 1}
  const currentUser = state.session.currentUser || defaultUser
  const defaultCity = { id: "", name: "", img_url: "", hosts: [], visitors: [], bookings: [], events: [] };
  const city = state.entities.location[ownProps.match.params.id] || defaultCity;
  return { city, currentUser, bookings };
};

const mapDispatchToProps = dispatch => {
  return {
    getCity: cityId => dispatch(getCity(cityId)),
    getEvents: cityId => dispatch(getEvents(cityId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
