import React, { Component } from 'react';
import { Paper } from 'material-ui'
import { prettify } from '../../Helpers/index'

class LeftColumn extends Component {
  render() {
    const {
      levelAssignment,
      title,
      guide,
    } = this.props
    return (
      <div className='left-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h1>{title}</h1>
          {
            prettify(levelAssignment)
          }
          <br />
          <br />
          { guide &&
            <div>
              <hr />
              {guide}
            </div>
          }
        </Paper>
      </div>
    )
  }
}

export default LeftColumn
