import React, { Component } from 'react';
import './App.css';
import { Divider, Drawer, MenuItem, MuiThemeProvider } from 'material-ui'
import levels from './Constants/Levels'
import Home from './Components/Home'
import Cached from 'material-ui/svg-icons/action/cached';
import practiseLevels from './Constants/PractiseLevels'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      open: false,
      isPractise: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  changeLevel = (level, isPractise = false) => this.setState({
    open: false,
    level: parseInt(level, 10),
    isPractise,
  })

  onNextLevelClick = () => {
    this.setState({
      level: this.state.level + 1,
      isPractise: false,
    })
  }
  render() {
    const {
      level,
      open,
      isPractise,
    } = this.state
    const rightIcon = (key) => !!practiseLevels[key] && <Cached title={'Practise this function!'} onClick={() => this.changeLevel(key, true)}/>
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <Drawer
              docked={false}
              width={350}
              open={open}
              onRequestChange={(open) => this.setState({open})} >
              <span>
                {Object.values(levels).map((level, key) => {
                    if (level.newCategory) {
                      return (
                        <div>
                          <Divider />
                          <MenuItem>
                            <span><strong>{level.newCategory}</strong></span>
                          </MenuItem>
                          <Divider />
                          <MenuItem onTouchTap={() => this.changeLevel(key)}
                                    rightIcon={rightIcon(key)}>
                            <span>{parseInt(key, 10) + 1}
                              . {level.name || 'level'}
                            </span>
                          </MenuItem>
                        </div>
                      )
                    }

                    return <MenuItem onTouchTap={() => this.changeLevel(key)}
                                     rightIcon={rightIcon(key)}>
                      <span>{parseInt(key, 10) + 1}
                        . {level.name || 'level'}
                      </span>
                    </MenuItem>
                  }
                )}
              </span>
            </Drawer>
          </div>
          <Home
            id={level}
            level={isPractise ? practiseLevels[level] : levels[level]}
            changeLevel={this.changeLevel}
            handleToggle={this.handleToggle}
            isNextLevel={!!levels[level + 1]}
            nextLevel={this.onNextLevelClick}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
