import React, { Component } from 'react';
import { Paper } from 'material-ui'

class Second extends Component {
  render() {
    return (
      <Paper className='paper-wrapper' zDepth={1} >
        <h1>Second</h1>
      </Paper>
    )
  }
}

export default Second
