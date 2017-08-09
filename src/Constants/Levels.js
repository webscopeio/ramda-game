import * as React from 'react'
import { prettify } from '../Helpers/index'
const levels ={
  0: {
    "title": "Turn apples to true with R.assoc",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    guide: <span>
      You can use R.assoc(<i>property</i>, <i>value</i>, <i>object</i>) to set object property to desired value.
      <br /><br />
      For example on this Object {prettify({})} you can invoke <i>R.assoc('melons', true, Object)</i>, to get
      {prettify({melons: true})}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>
  },
  1: {
    "title": "Make sure pears are in the object",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
      "pears": true
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>
  },
    2: {
    "title": "Add some red apples to apples object",
    "levelAssignment": {
      "apples": {
        green: true,
      },
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": {
        green: true,
        red: true,
      },
      "pineapples": true,
      "pears": false
    },
    guide: <span>
      You can use R.assocPath(<i>list of properties</i>, <i>value</i>, <i>object</i>) to set object property to desired value.
      <br /><br />
      For example on this Object {prettify({melons: {red: true}})} you can invoke <i>R.assocPath(['melons', yellow'], true, Object)</i>, to get
        {prettify({melons: {red: true, yellow: true}})}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>,
    "hints": [
      "Try using R.assocPath(['apples', 'red'], true)"
    ],
  },
  4: {
    "title": "Remove apples from object",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "pineapples": true,
      "pears": false
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>,
    "hints": [
      "Use dissoc to remove property from an object.",
      "Dissoc first argument takes property name that needs to be removed"
    ]
  },
  6: {
    "title": "Remove red apples from the object",
    "levelAssignment": {
      "apples": {
        green: true,
        red: true,
      },
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": {
        green: true,
      },
      "pineapples": true,
      "pears": false
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>,
    "hints": [
      "Try to use dissocPath as you used assocPath to remove apples into the basket",
      "Try using R.assoc('apples',___)"
    ]
  },
  8: {
    "title": "Pick just apples from the object",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>,
    "hints": [
      "Try to use R.pick to pick property that you need",
    ]
  },
  10: {
    "title": "Pick apples and pears from the object",
    "levelAssignment": {
      "apples": true,
      "pineapples": false,
      "pears": true
    },
    "resultOfLevel": {
      "apples": true,
      "pears": true
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(Object)
      </div>,
    "hints": [
      "Try to use assoc to throw some apples into the basket",
      "Try using R.assoc('apples',___)"
    ]
  },
  "100": {
    "title": "Learn to assoc",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    getUserInput: (complete) =>
      <div>
          <span>
            R.compose(
            <br />
            <div className='margin-left__30'>
              R.{complete}
            </div>
            <br />
            )(Object);
          </span>
      </div>,
    "hints": [
      "Try to use assoc to throw some apples into the basket",
      "Try using R.assoc('apples',___)"
    ]
  },
  "101": {
    "title": "Learn to assoc",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    getUserInput: (complete) =>
      <div>
          <span>
            R.compose(
            <br />
            <div className='margin-left__30'>
              R.{complete}
            </div>
            <br />
            )(Object);
          </span>
      </div>,
    "hints": [
      "Try to use assoc to throw some apples into the basket",
      "Try using R.assoc('apples',___)"
    ]
  }
}
export default levels
