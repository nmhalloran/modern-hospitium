import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      location_id: props.match.params.id,
      host_id: '',
      guest_id: props.guest_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.setState({ location_id: newProps.match.params.id })
    }
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
    this.props.bookTrip(booking).then(() => document.getElementById("myInsert").classList.toggle("show"));
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
      <div id="myInsert" className="booking-form-container">
        <form onSubmit={this.handleSubmit} className="booking-form-box">
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
