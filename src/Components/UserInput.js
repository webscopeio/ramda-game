import React, { Component } from 'react';
import { AutoComplete, MenuItem, Paper, SelectField } from 'material-ui'

class UserInput extends Component {
  state = {
    value: 1,
    dataSource: [
      "assoc('apples', true)",
      "dissoc('apples')",
      "map(R.assoc('apples', true)),"
    ],
    searchText: '',
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  render() {
    return (
      <Paper className='paper-wrapper' zDepth={1} >
        <h1>Your function:</h1>
        <span>
        </span>
        <br />
        <span>
          R.compose(
          <br />
          <div className='margin-left__30'>
            R.<AutoComplete
                onUpdateInput={this.handleUpdateInput}
                hintText='Start typing function name'
                searchText={this.state.searchText}
                dataSource={this.state.dataSource}
                openOnFocus={true}
          />
          </div>
          <br />
          )(Object);
        </span>
      </Paper>
    )
  }
}

export default UserInput
