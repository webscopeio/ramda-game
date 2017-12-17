import * as React from 'react'

// Data structure containing practise levels. Practise level ID had to equal to equal to corresponding level ID
// in Levels.js!
const practiseLevels = {
  0: {
    "title": "Make sure pears are in the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
    },
    "name": "R.assoc() practise",
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
      "pears": true
    },
    solution: <span>R.assoc('pears', true)</span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>
  },
  1: {
    "title": "Set green apples to 'false' apples basket",
    "levelAssignment": {
      "apples": {
        green: true,
        red: true,
      },
      "pineapples": true,
      "pears": false
    },
    "name": "R.assocPath() practise",
    "resultOfLevel": {
      "apples": {
        green: false,
        red: true,
      },
      "pineapples": true,
      "pears": false
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.assocPath(['apples', 'green'], false)</span>,
  },
  2: {
    "title": "Remove pears from basket",
    "levelAssignment": {
      "pears": false
    },
    "resultOfLevel": {
    },
    "name": "R.dissoc() practise",
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.dissoc('pears')</span>,
  },
  3: {
    "title": "Remove green apples from the basket",
    "levelAssignment": {
      apples: {
        color: {
          green: true,
          red: true,
        }
      },
      "pineapples": true,
      "pears": false
    },
    "name": "R.dissocPath() practise",
    "resultOfLevel": {
      "apples": {
        color: {
          red: true,
        }
      },
      "pineapples": true,
      "pears": false
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.dissocPath(['apples', 'color', 'green'])</span>,
  },
  4: {
    "title": "Pick apples and pears from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": false,
      "pears": true
    },
    "name": "R.pick() practise",
    "resultOfLevel": {
      "apples": true,
      pears: true
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.pick(['apples', 'pears'])</span>,
  },
  5: {
    "title": "Throw away apples and pears from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "name": "R.omit() practise",
    "resultOfLevel": {
      "pineapples": true,
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.omit(['apples', 'pears'])</span>,
  },
  "11": {
    "title": "Select just apples, olives and strawberries. Make sure they are also true.",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false,
      "melons": false,
      "olives": false,
      "cherries": false,
      "cucumbers": false,
      "strawberries": true,
      "peaches": false,
      "plums": false
    },
    "resultOfLevel": {
      "apples": true,
      "olives": true,
      "strawberries": true
    },
    getUserInput: (complete, complete2) =>
      <div>
          <span>
            R.compose(
            <br />
            <div className='margin-left__30'>
              R.{complete}, <br />
              R.{complete2}
            </div>
            <br />
            )(basket);
          </span>
      </div>,
    solution: <span>R.pick(['apples', 'olives', 'strawberries']) with R.assoc('olives', true)
      <div className='color__green display-flex'>
        or
      </div>
      R.assoc('olives', true) with R.pick(['apples', 'strawberries']). Since <i>R.compose</i> performs right to left
      composition, you have to be sure that R.pick is second argument of R.compose!
      <div className='color__green display-flex'>
        or
      </div>
      You can also omit each property except apples, olives and strawberries.
    </span>,
  },
}

export default practiseLevels
