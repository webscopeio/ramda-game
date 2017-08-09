import React, { Component } from 'react';
import ResultColumn from './ResultColumn'
import UserInputColumn from './UserInputColumn'
import LeftColumn from './LeftColumn'
import Levels from '../Constants/Levels.json'

class Level extends Component {
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
    const {
      id,
      level: {
        levelAssignment,
        title,
        resultOfLevel,
        dataSource,
        hints,
      },
    } = this.props
    if (id === null || id === undefined) {
      return <h1>We were unable to load this level. Select another.</h1>
    }
    return (
      <div className='display-flex'>
        <LeftColumn
          levelAssignment={levelAssignment}
          title={title}
        />
        <UserInputColumn
          searchText={searchText}
          handleUpdateInput={this.handleUpdateInput}
          dataSource={dataSource}
          hints={hints}
        />
        <ResultColumn
          level={levelAssignment}
          resultLevel={resultOfLevel}
          searchText={searchText}
        />
      </div>
    )
  }
}

export default Level
