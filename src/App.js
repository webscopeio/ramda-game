import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Drawer, MenuItem, MuiThemeProvider, RaisedButton } from 'material-ui'
import First from './Components/Levels/First'
import Second from './Components/Levels/Second'
import Third from './Components/Levels/Third'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      open: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  handleChange = value => {
    this.setState({value})
  }

  render() {
    return (
      <Router>
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
                <MenuItem onTouchTap={this.handleClose}><Link to="/first" className='menu-link'>First level </Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/second" className='menu-link'>Second level </Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/third" className='menu-link'>Third level </Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/forth" className='menu-link'>Forth level </Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/fifth" className='menu-link'>Fifth level </Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/sixth" className='menu-link'>Sixth level </Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/seventh" className='menu-link'>Seventh level </Link></MenuItem>
              </Drawer>
            </div>
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
