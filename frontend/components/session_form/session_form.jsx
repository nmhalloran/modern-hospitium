import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal)
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
        <p>Join Modern Hospitium for free</p>
        <div onClick={this.props.closeModal} className="close-x">X</div>
      </div>
      <br/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <p className="errors">{this.renderErrors()}</p>
          <div className="login-form">
            <br/>
            <label>
              <input className="type-indent" type="text"
                value={this.state.username}
                onChange={this.update('username') }
                placeholder="Username"
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
         <p>{this.props.question}</p>
          {this.props.otherForm}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
