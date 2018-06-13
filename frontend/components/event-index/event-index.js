import React from 'react';

class EventsIndex extends React.Component {

  render(props) {
    let newArray = [1, 2, 3, 4];
    let users = newArray.map((event, i) => {
      return (
        <li key={i} className='event-item'>
          <h2>Meet Fellow Travelers</h2>
          <h3></h3>
          <h3></h3>
        </li>
      )
    });
    return users;
  }
}

export default EventsIndex;
