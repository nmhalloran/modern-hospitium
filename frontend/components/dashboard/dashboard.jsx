import React from 'react';
import SampleLocaleIndex from './sample_locale_index';
import MyTripsIndex from './my_trips_index';
import SearchBar from '../search/search_bar';
import { Names } from '../app';
import { withRouter, Link } from 'react-router-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentUser.location_id !== newProps.currentUser.location_id) {
      this.props.getCities();
      this.props.getBookings(this.props.currentUser.id);
    }
  }

  componentDidMount() {
    this.props.getCities();
    this.props.getBookings(this.props.currentUser.id);
  }

  render() {
    const { currentUser } = this.props
    const citypics = this.props.cities ? <SampleLocaleIndex cities={this.props.cities} /> : <div></div>
    return (

      <div className='dash-body'>
        <div className='dash-main'>
          <section className='sidebar'>
            <div className='sidebar-header'>
              <div className='sidebar-item name'>{currentUser.username}</div>
              <div className='sidebar-item location'>
              <Link to={`/locations/${currentUser.location_id}`}>{currentUser.hometown}</Link>
              </div>
            </div>
            <div className="is-taking-guests">
             Looking forward to meetups!
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
                <i className="fas fa-plane"></i>
                &nbsp; &nbsp; MY TRAVEL PLANS
              </div>
            </div>
            <div className="dashboard-info">
            <ul>
            <ul>
              <MyTripsIndex bookings={this.props.currentUser.bookings} />
            </ul>
            </ul>
            </div>
            <div className='main-content-footer'>
            </div>
            <div className='main-content-header main-content-lower'>
              <div className='main-content-item name'>
                <i className="fas fa-home"></i>
                &nbsp; &nbsp; MY UPCOMING GUESTS
              </div>
            </div>
            <div className="dashboard-info">
              You have no upcoming guests
            </div>
            <div className='main-content-footer'>
            </div>
            <div className='main-content-header main-content-lower'>

              <div className='main-content-item name'>
                <i className="fas fa-couch"></i>
                &nbsp; &nbsp; EXPLORE ONE OF OUR SELECTED CITIES...
              </div>

            </div>
            <div className="sample-cities-container">
              {citypics}
            </div>
            <div className='sub-search-header'>
              <div className="search-bar-container">
                <SearchBar names={Names} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
}

export default withRouter(Dashboard);
