import React, { Component } from 'react';
import ResultColumn from '../ResultColumn'
import UserInputColumn from '../UserInputColumn'
import LeftColumn from '../LeftColumn'

const secondLevel = {
  apples: false,
  pineapples: true,
  pear: false,
}

const secondLevelResult = {
  apples: true,
  pineapples: true,
  pear: false,
}


class Second extends Component {
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
          level={secondLevel}
          title='Second level' />
        <UserInputColumn
          searchText={searchText}
          handleUpdateInput={this.handleUpdateInput}
        />
        <ResultColumn
          level={secondLevel}
          resultLevel={secondLevelResult}
          searchText={searchText}
        />
      </div>
    )
  }
}

export default Second
