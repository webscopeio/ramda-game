import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui'
import Level from './Level'
import Cached from 'material-ui/svg-icons/action/cached';

class Home extends Component {
  state = {
    isIntroduced: false,
  }
  onClickHandler = () => {
    this.setState({
      isIntroduced: true,
    })
  }
  render() {
    const {
      id,
      level,
      changeLevel,
      isNextLevel,
      nextLevel,
      handleToggle,
    } = this.props
    const {
      isIntroduced,
    } = this.state
    return isIntroduced
      ? (
        <div>
          <RaisedButton
            label="Levels"
            onTouchTap={handleToggle}
          />
          <Level
            id={id}
            level={level}
            changeLevel={changeLevel}
            isNextLevel={isNextLevel}
            nextLevel={nextLevel} />
        </div>
      )
      : (
        <div className='display-flex'>
          <Paper className='paper-wrapper__home'>
            <div className='display-flex__header'>
              <h1>Welcome to the Learn Ramda.js game!</h1>
            </div>
            <p>
              This game is designed to teach you basics of JavaScript framework Ramda.js. In each level there is
              explained new concept, with guide on how to solve the problem. If you are unable to do so, you can choose to
              display the answer. You are working with object or array, which is represented as basket of fruits, and you try to
              modify it with Ramda.js. As levels progress and you learn basic functions, more complicated levels will emerge,
              where you will <i>compose</i> functions together. <br /><br />
              You can chose to press <Cached /> button in the level selection, to start exercise on some of the topics.
              There will not be guide anymore, but you can always choose to show solution.
            </p>
            <div className='display-flex'>
              <RaisedButton label='Start learning' onTouchTap={this.onClickHandler} />
            </div>
          </Paper>
        </div>
      )
  }
}

export default Home
