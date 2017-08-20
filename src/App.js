import React, { Component } from 'react';
import './App.css';
import { Drawer, MenuItem, MuiThemeProvider, RaisedButton } from 'material-ui'
import Level from './Components/Level'
import Levels from './Constants/Levels'
import Home from './Components/Home'

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
    level: parseInt(level, 10),
  })

  onNextLevelClick = () => {
    this.setState({level: this.state.level + 1})
  }
  render() {
    const {
      level,
      open,
    } = this.state

    return (
      <MuiThemeProvider>
        <div>
          <div>
            <Drawer
              docked={false}
              width={200}
              open={open}
              onRequestChange={(open) => this.setState({open})} >
              {Object.keys(Levels).map(key => <MenuItem onTouchTap={() => this.changeLevel(key)}><span>{parseInt(key, 10) + 1}. level</span></MenuItem>)}
            </Drawer>
          </div>
          <Home
            id={level}
            level={Levels[level]}
            changeLevel={this.changeLevel}
            handleToggle={this.handleToggle}
            isNextLevel={!!Levels[level + 1]}
            nextLevel={this.onNextLevelClick}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
