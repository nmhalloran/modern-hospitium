import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { login, logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: demo => dispatch(login({ username: "nick", password: "123456" }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Greeting)
);
