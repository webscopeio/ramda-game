import React, { Component } from 'react';
import { AutoComplete, Paper } from 'material-ui'
import { ramdaFunctions } from '../../Constants/RamdaFunctions'

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
      filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
      dataSource={dataSource || ramdaFunctions}
      maxSearchResults={3}
      openOnFocus={true}
      onNewRequest={this.handleNewRequest}
      ref={(input) => { this.autoCompleteInput = input; }}
    />
    return (
      <div className='middle-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h1>Your function:</h1>
          {getUserInput(autoComplete)}
          <br />
          <br />
          <br />
          {solution && !displaySolution && <h4 className='solution__header' onClick={onSolutionClickHandler}>Click here to show the solution</h4>}
          {solution && displaySolution && (
              <div>
                <h4 className='solution__header' onClick={onSolutionClickHandler}>Click here to hide the solution</h4>
                <span className='color__green'>
                  {solution}
                </span>
              </div>
            )
          }
        </Paper>
      </div>
    )
  }
}

export default UserInputColumn
