import { connect } from 'react-redux';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import { makeBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    bookTrip: (booking) => dispatch(makeBooking(booking))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
