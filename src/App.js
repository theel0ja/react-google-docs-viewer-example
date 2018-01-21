import React, { Component } from 'react';
import './App.css';

import GoogleDocsViewer from 'react-google-docs-viewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Example of react-google-docs-viewer</h1>
        </header>
        
        <GoogleDocsViewer
          width="600px"
          height="780px"
          fileUrl="https://github.com/mozilla/pdf.js/raw/master/examples/helloworld/helloworld.pdf"
        />
      </div>
    );
  }
}

export default App;
