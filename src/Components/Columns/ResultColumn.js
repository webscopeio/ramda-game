import React, { Component } from 'react';
import { Paper } from 'material-ui'
import { prettify } from '../../Helpers/index'
import R from 'ramda'

const getFunction = ({ R, level, searchText }) => eval('R.' + searchText + '(level)')

class ResultColumn extends Component {
  render() {
    const {
      level,
      resultLevel,
      searchText,
    } = this.props
    let currentAnswer
    try {
      currentAnswer = getFunction({R, level: level, searchText})
    } catch (err) {}
    const isEqual = typeof currentAnswer === 'object'
      ? R.equals(currentAnswer, resultLevel)
      : false
    const correct = '\u2713'
    const failed = '\u2717'
    return (
      <div className='right-column'>
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
                prettify(resultLevel)
              }
            </div>
            {
              isEqual
                ? <h2 style={{color: 'green'}}>{correct} Correct!</h2>
                : <h2 style={{color: 'red'}}>{failed} Incorrect :-(</h2>
            }
          </div>
        </Paper>
      </div>
    )
  }
}

export default ResultColumn
