import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './css/App.css';
import store from './store'
import Game from './containers/Game'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
