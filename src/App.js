import React, { Component } from 'react';
import Header from './components/header.js';
import CurriculumDaysContainer from './components/curriculumDaysContainer.js';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Header/>
        <CurriculumDaysContainer dayDemos={this.props.dayDemos}/>
      </div>
    );
  }
}

export default App;
