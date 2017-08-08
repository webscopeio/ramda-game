import React, { Component } from 'react';
import ResultColumn from '../ResultColumn'
import UserInputColumn from '../UserInputColumn'
import LeftColumn from '../LeftColumn'

const firstLevelResult = {
  pineapples: true,
  pear: false,
}

const firstLevel = {
  apples: false,
  pineapples: true,
  pear: false,
}

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
    return (
      <div className='display-flex'>
        <LeftColumn
          level={firstLevel}
          title='First level'
        />
        <UserInputColumn
          searchText={searchText}
          handleUpdateInput={this.handleUpdateInput}
        />
        <ResultColumn
          level={firstLevel}
          resultLevel={firstLevelResult}
          searchText={searchText}
        />
      </div>
    )
  }
}

export default First
