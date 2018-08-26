import React from "react";
import { Link } from "react-router-dom";

class MyTripsIndex extends React.Component {
  render() {
    if (this.props.bookings.length === 0) {
      return <div>You have no upcoming trips</div>;
    }
    let bookings = Object.values(this.props.bookings).map((booking, i) => {
      let days =
        (Date.parse(booking.end_date) - Date.parse(booking.start_date)) /
        (60 * 60 * 24 * 1000);

      if (i < 3) {
        return (
          <li key={booking.id} className="sample-city-container">
            <div className="destination-container">
              <p className="destination">
                Visiting: <strong>{booking.location_name}</strong>
              </p>
              <h3 className="sample-city-text">
                <i className="fas fa-home" />
                &nbsp; &nbsp; {days} Nights &nbsp; &nbsp;
                <i className="far fa-calendar-alt" />
                {booking.start_date} => {booking.end_date} =>{days}
              </h3>
            </div>
          </li>
        );
      }
    });
    return bookings;
  }
}

export default MyTripsIndex;
