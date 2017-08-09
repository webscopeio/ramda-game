import React, { Component } from 'react';
import './App.css';
import { Drawer, MenuItem, MuiThemeProvider, RaisedButton } from 'material-ui'
import Level from './Components/Level'
import Levels from './Constants/Levels.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      open: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  changeLevel = (level) => this.setState({
    open: false,
    level: level,
  })

  handleChange = value => {
    this.setState({value})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <RaisedButton
              label="Levels"
              onTouchTap={this.handleToggle}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})} >
              {Object.keys(Levels).map(key => <MenuItem onTouchTap={() => this.changeLevel(key)}><span>{parseInt(key, 10) + 1}. level</span></MenuItem>)}
            </Drawer>
          </div>
          <Level id={this.state.level} level={Levels[this.state.level]} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
