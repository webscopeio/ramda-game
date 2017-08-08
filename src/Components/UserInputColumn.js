import React, { Component } from 'react';
import { AutoComplete, Paper } from 'material-ui'

class UserInputColumn extends Component {
  state = {
    value: 1,
    dataSource: [
      "assoc('apples', true)",
      "dissoc('apples')",
      "map(R.assoc('apples', true)),"
    ],
  }


  render() {
    const {
      handleUpdateInput,
      searchText,
    } = this.props
    return (
      <div className='middle-column'>
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
                  onUpdateInput={handleUpdateInput}
                  hintText='Start typing function name'
                  searchText={searchText}
                  filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                  dataSource={this.state.dataSource}
                  openOnFocus={true}
            />
            </div>
            <br />
            )(Object);
          </span>
        </Paper>
      </div>
    )
  }
}

export default UserInputColumn
