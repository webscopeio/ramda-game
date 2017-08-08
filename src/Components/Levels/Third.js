import React, { Component } from 'react';
import ResultColumn from '../ResultColumn'
import UserInputColumn from '../UserInputColumn'
import LeftColumn from '../LeftColumn'

const thirdLevel = {
  apples: false,
  pineapples: true,
  pear: false,
}

const thirdLevelResult = {
  apples: true,
  pineapples: true,
  pear: false,
}


class Third extends Component {
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
          level={thirdLevel}
          title='Third level'
        />
        <UserInputColumn
          searchText={searchText}
          handleUpdateInput={this.handleUpdateInput}
        />
        <ResultColumn
          level={thirdLevel}
          resultLevel={thirdLevelResult}
          searchText={searchText}
        />
      </div>
    )
  }
}

export default Third
