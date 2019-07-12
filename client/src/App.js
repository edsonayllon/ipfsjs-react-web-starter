import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import IPFS from 'ipfs'


function App() {

  useEffect(() => {
    startIpfs()
  }, [])

  const startIpfs = () => {
    const node = new IPFS()

    node.on('ready', () => {
      // Ready to use!
      // See https://github.com/ipfs/js-ipfs#core-api
    });
    console.log(window.ipfs);
    //window.ipfs.enable();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
