import React, { Component } from 'react';
import { Provider } from 'react-redux'
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
