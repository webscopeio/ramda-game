import React, { Component } from 'react';
import { AutoComplete, Paper, RaisedButton } from 'material-ui'
import { ramdaFunctions } from '../../Constants/RamdaFunctions'
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

class UserInputColumn extends Component {
  handleNewRequest = () => {
    this.autoCompleteInput.focus()
  }
  render() {
    const {
      handleUpdateInput,
      searchText,
      dataSource,
      solution,
      displaySolution,
      onSolutionClickHandler,
      getUserInput,
    } = this.props
    const autoComplete = <AutoComplete
      onUpdateInput={handleUpdateInput}
      hintText='Start typing function name'
      searchText={searchText}
      maxSearchResults={3}
      openOnFocus={true}
      onNewRequest={this.handleNewRequest}
      ref={(input) => { this.autoCompleteInput = input; }}
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={dataSource || ramdaFunctions}
    />
    return (
      <div className='middle-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h2>Your function:</h2>
          {getUserInput(autoComplete)}
          <br />
          <br />
          <br />
          {solution && !displaySolution && (
              <div className='display-flex'>
                <RaisedButton label="Click here to show the solution" onTouchTap={onSolutionClickHandler} />
              </div>
            )
          }
          {solution && displaySolution && (
              <div className='display-flex'>
                <div>
                  <RaisedButton label="Click here to hide the solution" onTouchTap={onSolutionClickHandler} />
                  <div className='color__green display-flex'>
                    {solution}
                  </div>
                </div>
              </div>
            )
          }
        </Paper>
      </div>
    )
  }
}

export default UserInputColumn
