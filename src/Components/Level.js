import React, { Component } from 'react';
import ResultColumn from './Columns/ResultColumn'
import UserInputColumn from './Columns/UserInputColumn'
import LeftColumn from './Columns/LeftColumn'

class Level extends Component {
  state = {
    searchText: '',
    displaySolution: false
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({
        searchText: '',
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
      searchText,
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
          searchText={searchText}
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
          searchText={[searchText]}
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
