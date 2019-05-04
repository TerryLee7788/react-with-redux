import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import actionTypes from './reducers/constants';
import './App.css';

import actions from './reducers/actions';

const mapStatetoProps = (state) => {

  return {
    name: state.name
  }

};

const mapDispathToProps = (dispath) => ({
  [actionTypes.greeting]: (name) => {

    return dispath(actions[actionTypes.greeting](name));

  }
})

class App extends Component {

  render () {

    const { name } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p
            onClick={() => {

              console.log(this.props.GREETING('123'));

            }}
          >
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }

}

export default connect(
  mapStatetoProps,
  mapDispathToProps
)(App);
