import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(currentUser) {
    console.log(this.props, "Will be mounted!");
    this.props.getAddress(currentUser.location_id);
  }

  componentDidMount() {
    console.log(this.props, "mounted!");
    const currentUser = currentUser || {location_id: ''}
    this.props.getAddress(currentUser.location_id);
  }
  render() {
    const currentUser = currentUser || {username: ''}
    return (

      <div className='dash-body'>
        <div className='dash-main'>
          <section className='sidebar'>
            <div className='sidebar-header'>
              <div className='sidebar-item name'>{currentUser.username}</div>
              <div className='sidebar-item location'>
              <Link to={`/locations/${this.props.city.id}`}>{this.props.city.name}</Link>
              </div>
            </div>
            <div className="is-taking-guests">
              Nick no take guest
            </div>
            <div className="is-taking-guests last">
              Have Facebook friends? Tell them about this site!
            </div>
            <div className="is-taking-guests last">
              <a href="http://facebook.com">
                <img className="fblink" src="https://s3.amazonaws.com/movefast-sport-refuge/images/facebook-icon.png" />
              </a>
            </div>

          </section>
          <section className='main-content'></section>
        </div>
      </div>
    );
  };
}

export default withRouter(Dashboard);
