import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import SearchBar from './searchBar';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser

  };
};
const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
