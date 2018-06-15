import React from 'react';
import { Link } from 'react-router-dom';

class SampleLocaleIndex extends React.Component {

  render() {
    let cities = Object.values(this.props.cities).map((city, i) => {
      if (i < 3) {
        return (
          <li key={city.id} className='sample-city-container'>
            <Link to={`/locations/${city.id}`}><img className="sample-cities" src={city.img_url} /></Link>
            <h3 className="sample-city-text">{city.name}</h3>
          </li>
        )
      }
    });
    return cities;

  }
}

export default SampleLocaleIndex;
