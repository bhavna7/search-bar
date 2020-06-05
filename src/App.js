import React from 'react';

import UsersList from './components/UsersList'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UsersList />
        </header>
      </div>
    );
  }
}

export default App;