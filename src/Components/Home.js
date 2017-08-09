import React, { Component } from 'react';
import UserInput from './Columns/UserInputColumn'
import Result from './Columns/ResultColumn'
import { Paper } from 'material-ui'

class Home extends Component {
  render() {
    return (
      <div className='display-flex'>
        <div className='left-column'>
          <Paper className='paper-wrapper' zDepth={1} >
            <h1>Home</h1>
          </Paper>
        </div>
        <div className='middle-column'>
          <UserInput />
        </div>
        <div className='right-column'>
          <Result />
        </div>
      </div>
    )
  }
}

export default Home
