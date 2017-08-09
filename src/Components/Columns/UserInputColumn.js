import React, { Component } from 'react';
import { AutoComplete, Paper } from 'material-ui'

class UserInputColumn extends Component {
  state = {
    value: 1,
  }


  render() {
    const {
      handleUpdateInput,
      searchText,
      dataSource,
      hints,
      getUserInput,
    } = this.props
    const autoComplete = <AutoComplete
      onUpdateInput={handleUpdateInput}
      hintText='Start typing function name'
      searchText={searchText}
      filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
      dataSource={dataSource || []}
      openOnFocus={true}
    />
    return (
      <div className='middle-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h1>Your function:</h1>
          {getUserInput(autoComplete)}
          <br />
          <br />
          <br />
          {hints && <h3>Tips:</h3>}
          {hints && hints.map(hint => {
            return (
              <div style={{ color: 'green' }}>
                <span>{hint}</span><br />
              </div>
            )
          })}
        </Paper>
      </div>
    )
  }
}

export default UserInputColumn
