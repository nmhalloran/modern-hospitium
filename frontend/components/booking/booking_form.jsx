import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      location_id: props.match.params.id,
      host_id: '1',
      guest_id: props.guest_id
    };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    this.props.getBooking(booking).then(() => 
    document.getElementById("myDropdown").classList.toggle("show");
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="login-form-container">
      <div className='login-form-header'>
        <p>Book your trip here honky!</p>
      </div>
      <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <br/>
            <label>
              <input className="type-indent" type="date"
                value={this.state.start_date}
                onChange={this.update('start_date') }
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="date"
                value={this.state.end_date}
                onChange={this.update('end_date')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value="Make Request" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);
