import React, { Component } from 'react';
import { Paper } from 'material-ui'
import { firstLevelResult } from '../Constants/levels'
import { prettify } from '../Helpers/index'

class Result extends Component {
  render() {
    const {
      currentAnswer,
    } = this.props
    const isEqual = typeof currentAnswer === 'object'
      ? JSON.stringify(currentAnswer) === JSON.stringify(firstLevelResult)
      : false
    const correct = '\u2713'
    const failed = '\u2717'
    return (
      <Paper className='paper-wrapper' zDepth={1} >
        <div className='display-flex-column'>
          <div>
            <h1>Result</h1>
            {
              typeof currentAnswer === 'object'
                ? prettify(currentAnswer)
                : '{ }'
            }
          </div>
          <div>
            <h1>Desired result</h1>
            {
              prettify(firstLevelResult)
            }
          </div>
          {
            isEqual
              ? <h2 style={{color: 'green'}}>{correct} Correct!</h2>
              : <h2 style={{color: 'red'}}>{failed} Incorrect :-(</h2>
          }
        </div>
      </Paper>
    )
  }
}

export default Result
