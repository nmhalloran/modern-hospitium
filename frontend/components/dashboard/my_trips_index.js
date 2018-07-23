import React from "react";
import { Link } from "react-router-dom";

class MyTripsIndex extends React.Component {
  render() {
    let bookings = Object.values(this.props.bookings).map((booking, i) => {
      if (i < 3) {
        return (
          <li key={booking.id} className="sample-city-container">
            <div> PUBlIC TRIP </div>
            <h3 className="sample-cities">{booking.location_name}</h3>
            <h3 className="sample-city-text">
              {booking.start_date} => {booking.end_date}
            </h3>
          </li>
        );
      }
    });
    return bookings;
  }
}

export default MyTripsIndex;
