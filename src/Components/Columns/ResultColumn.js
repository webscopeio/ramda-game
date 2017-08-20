import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui'
import { prettify } from '../../Helpers/index'
import R from 'ramda'

const getFunction = ({ R, level, searchText }) => eval('R.' + searchText + '(level)')

class ResultColumn extends Component {
  render() {
    const {
      levelAssignment,
      resultLevel,
      searchText,
      changeLevel,
      id,
      isNextLevel,
      nextLevel,
    } = this.props
    let currentAnswer
    try {
      currentAnswer = getFunction({R, level: levelAssignment, searchText})
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
                ? <h2 onClick={() => changeLevel(id + 1)} className='color__green'>{correct} Correct!</h2>
                : <h2 className='color__red'>{failed} Incorrect :-(</h2>
            }
            {
              !isNextLevel && isEqual &&
                <span className='color__green'>
                  You reached and solved the last level. Congratulations!
                </span>
            }
            {
              isEqual && isNextLevel && <RaisedButton label="Next level" onClick={nextLevel} disabled={!isNextLevel} />
            }
          </div>
        </Paper>
      </div>
    )
  }
}

export default ResultColumn
