import React, { Component } from 'react';
import { Paper } from 'material-ui'
import Result from '../Result'
import UserInput from '../UserInput'
import { prettify } from '../../Helpers/index'
import { firstLevel } from '../../Constants/levels'
import R from 'ramda'

const getFunction = ({ R, level, searchText }) => eval('R.' + searchText + '(level)')
class First extends Component {
  state = {
    searchText: '',
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  render() {
    const {
      searchText,
    } = this.state
    let currentAnswer
    try {
      currentAnswer = getFunction({R, level: firstLevel, searchText})
    } catch (err) {}
    return (
      <div className='display-flex'>
        <div className='left-column'>
          <Paper className='paper-wrapper' zDepth={1} >
            <h1>First</h1>
            {
              prettify(firstLevel)
            }
          </Paper>
        </div>
        <div className='middle-column'>
          <UserInput
            searchText={searchText}
            handleUpdateInput={this.handleUpdateInput}
          />
        </div>
        <div className='right-column'>
          <Result
            currentAnswer={currentAnswer}
          />
        </div>
      </div>
    )
  }
}

export default First
