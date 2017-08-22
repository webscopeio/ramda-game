import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui'
import { prettify } from '../../Helpers/index'
import R from 'ramda'

const getFunction = ({ R, level, searchText }) => eval('R.' + searchText)

class ResultColumn extends Component {
  render() {
    const {
      levelAssignment,
      resultLevel,
      searchTexts,
      changeLevel,
      id,
      isNextLevel,
      nextLevel,
    } = this.props
    let currentAnswer
    let functionList
    try {
      functionList = searchTexts.map(text => getFunction({R, level: levelAssignment, searchText: text}))
    } catch (err) {}
    try {
      currentAnswer = R.compose(...functionList)(levelAssignment)
    } catch (err) {
    }
    const isEqual = typeof currentAnswer === 'object'
      ? R.equals(currentAnswer, resultLevel)
      : false
    const correct = '\u2713'
    const failed = '\u2717'
    return (
      <div className='right-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h2>Result</h2>
          {
            prettify(currentAnswer)
          }
          <br />
          <br />
          <hr />
          <br />
          <h2>Desired result</h2>
          {
            prettify(resultLevel)
          }
          {
            isEqual
              ? <h3 onClick={() => changeLevel(id + 1)} className='color__green'>{correct} Correct!</h3>
              : <h3 className='color__red'>{failed} Incorrect :-(</h3>
          }
          {
            !isNextLevel && isEqual &&
              <span className='color__green'>
                You reached and solved the last level. Congratulations!
              </span>
          }
          {
            isNextLevel &&
              <div className='display-flex'>
                <RaisedButton label="Next level" onTouchTap={nextLevel} disabled={!isEqual} />
              </div>
          }
        </Paper>
      </div>
    )
  }
}

export default ResultColumn
