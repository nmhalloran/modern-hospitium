import React from 'react';

class EventsIndex extends React.Component {

  render(props) {
    let events = this.props.events.map((event, i) => {
      if (i < 4) {
        return (
          <li key={event.id} className='event-item'>
            <h2>Meet Fellow Travelers</h2>
            <h3>{event.date}</h3>
            <p className="event-descriptor">{event.description}</p>
          </li>
        )
      }
    });
    return events;

  }
}

export default EventsIndex;
