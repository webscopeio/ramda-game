import React, { Component } from 'react';
import { Paper } from 'material-ui'

class First extends Component {
  render() {
    return (
      <Paper className='paper-wrapper' zDepth={1} >
        <h1>First</h1>
      </Paper>
    )
  }
}

export default First
