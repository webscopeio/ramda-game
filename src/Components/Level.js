import React, { Component } from 'react';
import ResultColumn from './Columns/ResultColumn'
import UserInputColumn from './Columns/UserInputColumn'
import LeftColumn from './Columns/LeftColumn'

class Level extends Component {

  constructor (props) {
    super(props)
    let searchTexts = []
    // Initiate searchtexts for selected level
    for (let i = 0; i < props.level.getUserInput.length; i++) {
      searchTexts.push('')
    }
    this.state = {
      searchTexts,
      displaySolution: false
    }
  }

  handleUpdateInput = (index, searchText) => {
    let {
      searchTexts
    } = this.state
    searchTexts[index] = searchText
    return this.setState({
      searchTexts,
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.id !== this.props.id) {
      let searchTexts = []
      // Clear level inputs when level changes
      for (let i = 0; i < nextProps.level.getUserInput.length; i++) {
        searchTexts.push('')
      }
      this.setState({
        searchTexts,
        displaySolution: false
      })
    }
  }

  onSolutionClickHandler = () => {
    this.setState({
      displaySolution: !this.state.displaySolution
    })
  }

  render() {
    const {
      searchTexts,
      displaySolution,
    } = this.state
    const {
      id,
      level: {
        levelAssignment,
        title,
        resultOfLevel,
        dataSource,
        solution,
        getUserInput,
        levelHeader,
        guide,
      },
      nextLevel,
      isNextLevel,
      changeLevel,
    } = this.props
    return (
      <div className='display-flex main-wrapper'>
        {/* Left column, containing level assignment and guide (if present) */}
        <LeftColumn
          levelAssignment={levelAssignment}
          guide={guide}
          title={title}
          levelHeader={levelHeader}
        />
        {/* Middle column, where user input and solution is located */}
        <UserInputColumn
          searchTexts={searchTexts}
          handleUpdateInput={this.handleUpdateInput}
          dataSource={dataSource}
          solution={solution}
          getUserInput={getUserInput}
          onSolutionClickHandler={this.onSolutionClickHandler}
          displaySolution={displaySolution}
        />
        {/* Right column, where user can see his functions current output and where is also shown correct solution output */}
        <ResultColumn
          levelAssignment={levelAssignment}
          resultLevel={resultOfLevel}
          searchTexts={searchTexts}
          changeLevel={changeLevel}
          id={id}
          isNextLevel={isNextLevel}
          nextLevel={nextLevel}
        />
      </div>
    )
  }
}

export default Level
