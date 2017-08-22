import React, { Component } from 'react';
import ResultColumn from './Columns/ResultColumn'
import UserInputColumn from './Columns/UserInputColumn'
import LeftColumn from './Columns/LeftColumn'

class Level extends Component {

  constructor (props) {
    super(props)
    let searchTexts = []
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
      console.log('nextProps', nextProps)
      let searchTexts = []
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
      <div className='display-flex'>
        <LeftColumn
          levelAssignment={levelAssignment}
          guide={guide}
          title={title}
          levelHeader={levelHeader}
        />
        <UserInputColumn
          searchTexts={searchTexts}
          handleUpdateInput={this.handleUpdateInput}
          dataSource={dataSource}
          solution={solution}
          getUserInput={getUserInput}
          onSolutionClickHandler={this.onSolutionClickHandler}
          displaySolution={displaySolution}
        />
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
