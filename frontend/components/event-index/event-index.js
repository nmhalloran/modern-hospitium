import React from 'react';

class EventsIndex extends React.Component {

  render(props) {
    let newArray = [1, 2, 3, 4];
    let faker = require('./faker');
    console.log(faker.fake("{{date.future}}"));
    let users = newArray.map((event, i) => {
      return (
        <li key={i} className='event-item'>
          <h2>Meet Fellow Travelers</h2>
          <h3>{faker.fake("{{date.future}}")}</h3>
          <h3>{faker.fake("{{lorem.paragraph}}")}</h3>
        </li>
      )
    });
    return users;
  }
}

export default EventsIndex;
