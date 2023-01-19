import './App.css';
import React from 'react';
import Header from './react-components/Header'
import Parser from './react-components/Parser'

class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <Parser />
      </div>
    )
  }
}

export default App;
