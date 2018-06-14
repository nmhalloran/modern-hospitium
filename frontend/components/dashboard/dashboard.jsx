import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SingleDatePicker, DateRangePicker } from 'react-dates';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    console.log(this.props, "Will be mounted!");
    if (this.props.currentUser.location_id !== newProps.currentUser.location_id) {
      this.props.getAddress(newProps.currentUser.location_id);
    }
  }

  componentDidMount() {
    console.log(this.props, "mounted!");
    this.props.getAddress(this.props.currentUser.location_id);
  }
  render() {
    const { currentUser } = this.props

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
          <section className='main-content'>
            <div className='main-content-header'>

              <div className='main-content-item name'>
                <i className="fas fa-couch"></i>
                &nbsp; &nbsp; EXPLORE ONE OF OUR SELECTED CITIES...
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
        </div>
      </div>
    );
  };
}

export default withRouter(Dashboard);
