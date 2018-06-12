import React from 'react';
import { withRouter } from 'react-router-dom';


class Location extends React.Component {
  constructor(props) {
    console.log("When does this happen?")
    super(props);
    this.props.getCity(this.props.match.params.id);
  }

  componentWillMount() {
    console.log(this.props.match.params.id, "willMount")
    this.props.getCity(this.props.match.params.id)
  }



  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.getCity(newProps.match.params.id);
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id, "didMount")
    this.props.getCity(this.props.match.params.id);
  }




  render(newProps) {
    let hosts = this.props.city.users.map(user => {
      return (
        <li className='index-pic-container'>
          <img className='index-pic' src={user.image_url} />
          <p className='index-title'>{user.username}</p>
        </li>
      )
    });
    var topPicStyle = {
      display: 'flex',
      width: "100%",
      height: "363px",
      backgroundImage: `url(${this.props.city.img_url})`,
      opacity: '0.8',
      backgroundPosition: "center center",
      backgroundSize: "cover"
    };
      const city = this.props.city;
      console.log(city, "Inside bool");
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
               <div className='host-visitor-header'>
                <h3>
                  <i className="fas fa-home" ></i>
                  &nbsp; &nbsp; Local Hosts
                </h3>
              </div>
              <div className='host-visitor-content'>
                <p className='host-visitor-counter'>{`Stay with one of ${this.props.city.users.length} hosts in ${this.props.city.name}`}</p>
                <ul>{hosts}</ul>
              </div>
              </section>
              <section className='hosts-visitor'>
                <div className='host-visitor-header'>
                <h3>
                  <i className="fas fa-plane" ></i>
                  &nbsp; &nbsp; Upcoming Travelers
                </h3>
                </div>
              </section>
              <section className='hosts-visitor-right'>
                <div className='host-visitor-header'>
                </div>
              </section>
            </div>
            <div className='events-container'>

            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Location;
