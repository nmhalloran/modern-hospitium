import React from 'react';

class EventsIndex extends React.Component {

  render(props) {
    let events = this.props.events.map((event, i) => {
      if (i < 3) {
        return (
          <li key={event.id} className='event-item'>
            <img className="event-pic" src={event.img_url} />
            <div className="event-info-container">
              <h2>{event.name}</h2>
              <h3 className='event-date-info'>{event.date}</h3>
              <p className="event-descriptor">{event.description}</p>
            </div>
          </li>
          
        )
      }
    });
    return events;

  }
}

export default EventsIndex;
