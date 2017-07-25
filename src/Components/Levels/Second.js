import React, { Component } from 'react';
import { Paper } from 'material-ui'
import UserInput from '../UserInput'
import Result from '../Result'

class Second extends Component {
  render() {
    return (
    <div className='display-flex'>
      <div className='left-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h1>Second</h1>
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

export default Second
