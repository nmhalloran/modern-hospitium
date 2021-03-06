import React from 'react';
import { withRouter } from 'react-router-dom';
import UsersIndex from '../user-index/user-index';
import EventsIndex from '../event-index/event-index';
import BookingFormContainer from '../booking/booking_container';


class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.getCity(newProps.match.params.id);
      this.props.getEvents(newProps.match.params.id);
    }
  }

  componentDidMount() {
    this.props.getCity(this.props.match.params.id);
  }


  render(newProps) {

    var topPicStyle = {
      display: 'flex',
      width: "100%",
      height: "363px",
      backgroundImage: `url(${this.props.city.img_url})`,
      opacity: '0.8',
      backgroundPosition: "center center",
      backgroundSize: "cover"
    };


    return (
      <div>
        <section style={topPicStyle}>
        <div className='location-name-container'>
          <h3 className="city-name">
            {this.props.city.name.toUpperCase()}
          </h3>
        </div>
        </section>
        <div className='dash-body'>
          <div className='location-main'>
            <div className='location-container'>
              <section className='hosts-visitor'>
                 <div className='dashboard-subheaders'>
                    <h3>
                      <i className="fas fa-home" ></i>
                      &nbsp; &nbsp; Local Hosts
                    </h3>
                </div>
                <div className='host-visitor-content'>
                  <p className='host-visitor-counter'>{`Stay with one of ${this.props.city.hosts.length} hosts in ${this.props.city.name}`}</p>
                  <ul className='user-index-container'>
                    <UsersIndex hosts={this.props.city.hosts} />
                  </ul>
                </div>
              </section>
              <section className='hosts-visitor'>
                <div className='dashboard-subheaders'>
                  <h3>
                    <i className="fas fa-plane" ></i>
                    &nbsp; &nbsp; Upcoming Travelers
                  </h3>
                </div>
                <div className='host-visitor-content'>
                  <p className='host-visitor-counter'>{`Meet up with one of ${this.props.city.visitors.length} travelers in ${this.props.city.name}`}</p>
                  <ul className='user-index-container'>
                    <UsersIndex hosts={this.props.city.visitors} />
                  </ul>
                </div>
              </section>
              <section className='hosts-visitor-right'>
                <div className='dashboard-subheaders'>
                  <h3> Book a Trip! </h3>
                </div>
                <div className="host-visitor-content">

                    <BookingFormContainer hosts = {this.props.city.hosts} location_id={this.props.city.id} guest_id={this.props.currentUser.id} />
                </div>
              </section>
            </div>
            <div className='events-container'>
              <section className='event-table'>
                <div className='dashboard-subheaders'>
                  <h3>
                    <i className="fas fa-calendar-alt" ></i>
                    &nbsp; &nbsp; Upcoming Events
                  </h3>
                </div>
                <div className='event-content'>
                  <ul className='event-index-container'>
                    <EventsIndex  events={this.props.city.events}/>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Location;
