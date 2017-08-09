## Ramda game

These mini 'games' will help you code in framework Ramdajs. Try to accomplish levels 
by entering Ramda functions to input field. There are more than just one way to finish 
some level. After successful completion of some level, you will see intended answer if it differs
from yours.

### Entering new levels

Creating new levels is highly encouraged. For now, you can do this just by creating PR with your 
ideas. Add new object to array in `package.json` to add a new level. There are currently this 
properties in each object in this array: 
- title - what should appear as a title of your level
- levelAssignment - assignment of a level. Should be an object that user tries to change in order 
to complete level.
- resultOfLevel - Result of desired mutation of levelAssignment. What is expected value after user 
enters correct functions.

##### Optional properties

- dataSource - is array of strings, that are hinted to user in autocomplete text field (where user 
enters functions).
- hints - is array of strings, that user can optionally open and get advise from. Should contain 
like which functions are recommended, what each of them does and stuff like that. 


### Contributors

- Oliver Rýdzi

This game is powered by *Webscope.*
