import React from 'react';
import { withRouter } from 'react-router-dom';


const address = "120 Bellevue St. Boston, MA 02132"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.address;
  }

  componentDidMount() {
    console.log(address), "mounted!";
    this.props.getAddress(address);
  }
  render() {
    debugger
    return (
      <div className='dash-body'>
        <div className='dash-main'>
          <section className='sidebar'></section>
          <section className='main-content'></section>
        </div>
      </div>
    );
  };
}

export default withRouter(Dashboard);
