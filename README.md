## Ramda game

These mini 'games' will help you code in framework Ramdajs. Try to accomplish levels 
by entering Ramda functions to input field. There are more than just one way to finish 
some level. After successful completion of some level, you can compare intended solution
to yours.

### Gameplay

Playing ramda-game is straight forward - you need to make correct transformations on data
in order to win the level. If you have no clue how to program in Ramda, there is a guide
to each level to help you go through levels. If you can find solution after that,
you can still chose to see solution by clicking on button "Click here to show the solution".

You can also click on circling arrows next to level name in some levels, to turn on one
more practise level.


### Entering new levels

Creating new levels is highly encouraged. For now, you can do this just by creating PR with your 
ideas. Add new object to array in `./src/constants/Levels` to add a new level. There are currently
this properties in each object of levels array:
- **title** - what should appear as a title of your level.
- **name** - name of the level (will be shown in the levels selection.
- **levelAssignment** - assignment of a level. Should be an object that user tries to change in order
to complete level.
- **getUserInput** - function that takes autocompletes as an argument (even 10).
- **solution** - should be JSX element (ideally span) inside of which you will write what is the solution to your level.
- **resultOfLevel** - Result of desired mutation of levelAssignment. What is expected value after user
enters correct functions.

##### Optional properties

- **newCategory** - separator if you are going to create entire new category of levels.
- **levelHeader** - Header of the level is more of a header to guide. Use as a header for your guide, if present.
- **guide** - Guide for user, how to complete your level.


### Contributors

- Oliver Rýdzi

This game is powered by *Webscope.io*.
