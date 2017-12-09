import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui'
import { prettify } from '../../Helpers/index'
import R from 'ramda'
import Overdrive from 'react-overdrive'
import Cached from 'material-ui/svg-icons/action/cached';

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
      isPipe,
    } = this.props
    let currentAnswer
    let functionList
    try {
      functionList = searchTexts.map(text => getFunction({R, level: levelAssignment, searchText: text}))
    } catch (err) {}
    try {
      currentAnswer = isPipe
        ? R.pipe(...functionList)(levelAssignment)
        : R.compose(...functionList)(levelAssignment)
    } catch (err) {
    }
    const isEqual = currentAnswer
      ? R.equals(currentAnswer, resultLevel)
      : false
    const correct = '\u2713'
    const failed = '\u2717'
    return (
      <div className='right-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h2>Result</h2>
          {
            currentAnswer
              ? <Overdrive id="result-animation" duration={500}>{prettify(currentAnswer)}</Overdrive>
              : <Overdrive id="result-animation" duration={500}>{prettify(currentAnswer)}</Overdrive>
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
              ?
                  <Overdrive id="correct-animation" duration={500}>
                    <h3 onClick={() => changeLevel(id + 1)} className='color__green'>{correct} Correct!</h3>
                  </Overdrive>
              :
                  <Overdrive id="correct-animation" duration={500}>
                    <h3 className='color__red'>{failed} Incorrect :-(</h3>
                  </Overdrive>
          }
          {
            !isNextLevel && isEqual &&
              <div>
                <span className='color__green'>
                  You reached and solved the last level. Congratulations!
                </span><br /><br />
                <span>
                  You can now try to solve practise levels by clicking on <Cached/> button next to the level names,
                  if you haven't solved them already!
                </span>
              </div>
          }
          {
            isNextLevel &&
              <div className='display-flex'>
                <RaisedButton label="Next topic" onTouchTap={nextLevel} disabled={!isEqual} />
              </div>
          }
        </Paper>
      </div>
    )
  }
}

export default ResultColumn
