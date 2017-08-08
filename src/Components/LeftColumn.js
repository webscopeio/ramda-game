import React, { Component } from 'react';
import { Paper } from 'material-ui'
import { prettify } from '../Helpers/index'

class LeftColumn extends Component {
  render() {
    const {
      level,
      title,
    } = this.props
    return (
      <div className='left-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h1>{title}</h1>
          {
            prettify(level)
          }
        </Paper>
      </div>
    )
  }
}

export default LeftColumn
