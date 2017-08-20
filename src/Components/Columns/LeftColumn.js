import React, { PureComponent } from 'react';
import { Paper } from 'material-ui'
import { prettify } from '../../Helpers/index'

class LeftColumn extends PureComponent {
  render() {
    const {
      levelAssignment,
      title,
      guide,
      levelHeader,
    } = this.props
    return (
      <div className='left-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h2>{title}</h2>
          {
            prettify(levelAssignment)
          }
          <br />
          <br />
          { guide &&
            <div>
              <hr />
              <br />
              <br />
              <h3>{levelHeader}</h3>
              {guide}
            </div>
          }
        </Paper>
      </div>
    )
  }
}

export default LeftColumn
