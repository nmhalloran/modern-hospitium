import { connect } from 'react-redux';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Join Modern Hospitium!',
    question: "Already a member?",
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
     <button className='modal-button' onClick={() => dispatch(openModal('login'))}>
       Log In
     </button>
   ),
   closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
