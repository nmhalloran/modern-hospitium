import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push("No matches");
    }
    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    let i = this.props.names.indexOf(name);
    
    this.setState({inputVal: name}, () => (this.props.history.push(`/locations/${i}`), this.setState({inputVal: ""})));

  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={(e) => this.selectName(e)}>{result}</li>
      );
    });
    return(
      <div className="search-bar-container">
        <div className='auto'>
          <span className='search-title'>Explore: </span>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Where are you going?'/>
            <img className='search-button' src="https://i.imgur.com/pkLnBCb.png" />
          <ul className="search-results-container">
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
};
