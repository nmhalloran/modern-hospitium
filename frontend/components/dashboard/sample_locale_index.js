import React from 'react';

class SampleLocaleIndex extends React.Component {

  render() {
    debugger
    let cities = Object.values(this.props.cities).map((city, i) => {
      if (i < 3) {
        return (
          <li key={city.id} className='event-item'>
            <img src={city.img_url} />
          </li>
        )
      }
    });
    return cities;

  }
}

export default SampleLocaleIndex;
