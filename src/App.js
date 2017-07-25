import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { MuiThemeProvider, Tab, Tabs } from 'material-ui'
import First from './Components/Levels/First'
import Second from './Components/Levels/Second'
import Third from './Components/Levels/Third'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange = value => {
    this.setState({value})
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Tabs onChange={this.handleChange} value={this.state.value}>
              <Tab value={0} label="first" containerElement={<Link to="/first"/>} />
              <Tab value={1} label="second" containerElement={<Link to="/second"/>}/>
              <Tab value={2} label="third" containerElement={<Link to="/third"/>} />
            </Tabs>
            <div>
                <Route exact path="/" component={First}/>
                <Route path="/first" component={First}/>
                <Route path="/second" component={Second}/>
                <Route path="/third" component={Third}/>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
