import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/@atoms/Text';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text type={'body1'} color={'primary'}>sss</Text>
      </header>
    </div>
  );
}

export default App;
