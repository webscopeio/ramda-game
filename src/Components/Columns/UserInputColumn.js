import React, { Component } from 'react';
import { AutoComplete, Paper, RaisedButton } from 'material-ui'
import { ramdaFunctions } from '../../Constants/RamdaFunctions'

class UserInputColumn extends Component {
  handleNewRequest = (index) => {
    this.autoCompleteInput[index].focus()
  }
  autoCompleteInput = []
  render() {
    const {
      handleUpdateInput,
      searchTexts,
      dataSource,
      solution,
      displaySolution,
      onSolutionClickHandler,
      getUserInput,
    } = this.props
    const autoComplete = searchTexts.map((text, index) => <AutoComplete
      onUpdateInput={(text) => handleUpdateInput(index, text)}
      hintText='Start typing function name'
      searchText={text}
      maxSearchResults={3}
      openOnFocus={true}
      onNewRequest={() => this.handleNewRequest(index)}
      ref={(input) => { this.autoCompleteInput[index] = input; }}
      filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
      dataSource={dataSource || ramdaFunctions}
    />)
    return (
      <div className='middle-column'>
        <Paper className='paper-wrapper' zDepth={1} >
          <h2>Your function:</h2>
          {getUserInput(...autoComplete)}
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
