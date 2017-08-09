import React, { Component } from 'react';
import ResultColumn from './Columns/ResultColumn'
import UserInputColumn from './Columns/UserInputColumn'
import LeftColumn from './Columns/LeftColumn'

class Level extends Component {
  state = {
    searchText: '',
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.id !== this.props.id) {
      this.handleUpdateInput('')
    }
  }

  render() {
    const {
      searchText,
    } = this.state
    const {
      level: {
        levelAssignment,
        title,
        resultOfLevel,
        dataSource,
        hints,
        getUserInput,
        guide,
      },
    } = this.props

    return (
      <div className='display-flex'>
        <LeftColumn
          levelAssignment={levelAssignment}
          guide={guide}
          title={title}
        />
        <UserInputColumn
          searchText={searchText}
          handleUpdateInput={this.handleUpdateInput}
          dataSource={dataSource}
          hints={hints}
          getUserInput={getUserInput}
        />
        <ResultColumn
          levelAssignment={levelAssignment}
          resultLevel={resultOfLevel}
          searchText={searchText}
        />
      </div>
    )
  }
}

export default Level
