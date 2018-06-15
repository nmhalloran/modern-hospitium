import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCities } from '../../actions/location_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => {
  const defaultUser = { id: "", username: "", image_url: "", location_id: 1}
  const currentUser = state.session.currentUser || defaultUser
  const cities = state.entities.location
  debugger
  return { cities, currentUser }
};

const mapDispatchToProps = dispatch => {
  return {
    getCities: () => dispatch(getCities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
