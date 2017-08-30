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
    levelHeader: 'Guide to R.assoc - ',
    guide: <span>
      You can use R.assoc(<i>property</i>, <i>value</i>, <i>object</i>) to set object property to desired value.
      <br /><br />
      For example on this basket {prettify({})} you can invoke <i>R.assoc('melons', true, basket)</i>, to get
      {prettify({melons: true})}
    </span>,
    solution: <span>R.assoc('apples', true)</span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
  },
  1: {
    "title": "Make sure pears are in the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
    },
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
  2: {
    "title": "Add some red apples to apples basket",
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
    levelHeader: 'Guide to R.assocPath - ',
    guide: <span>
      You can use R.assocPath(<i>list of properties</i>, <i>value</i>, <i>object</i>) to set object property, even if
      you need it needs to be nested.
      <br /><br />
      For example on this basket {prettify({melons: {red: true}})} you can invoke <i>R.assocPath(['melons', yellow'], true, basket)</i>, to get
      {prettify({melons: {red: true, yellow: true}})}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.assocPath(['apples', 'red'], true)"</span>,
  },
  3: {
    "title": "Set green apples to 'false' apples basket",
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
  4: {
    "title": "Remove apples from basket",
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
        R.{complete}(basket)
      </div>,
    levelHeader: 'Guide to R.dissoc - ',
    guide: <span>
      You can use R.dissoc(<i>property</i>, <i>object</i>) to remove object's property.
      <br /><br />
      For example on this basket {prettify({melons: true, apples: true})} you can invoke <i>R.dissoc('melons', basket)</i>, to get
      {prettify({apples: true})}
    </span>,
    solution: "R.dissoc('apples')",
  },
  5: {
    "title": "Remove pears from basket",
    "levelAssignment": {
      "pears": false
    },
    "resultOfLevel": {
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.dissoc('pears')</span>,
  },
  6: {
    "title": "Remove red apples from the basket",
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
    levelHeader: 'Guide to R.dissocPath - ',
    guide: <span>
      You can use R.dissocPath(<i>list of properties</i>, <i>object</i>) to remove object's nested property.
      <br /><br />
      For example on this basket {prettify({
      "apples": {
        green: true,
        red: true,
      },
      "pineapples": true,
      "pears": false})} you can invoke <i>R.dissocPath(['apples', 'red'], basket)</i>, to get
      {prettify({
        "apples": {
          green: true,
        },
        "pineapples": true,
        "pears": false})}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.dissocPath(['apples', 'red'])</span>,
  },
  7: {
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
  8: {
    "title": "Pick just apples from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
    },
    levelHeader: 'Guide to R.pick - ',
    guide: <span>
      You can use R.pick(<i>list of properties</i>, <i>object</i>) to get object property.
      <br /><br />
      For example on this basket {prettify({
      "apples": true,
      "pineapples": true,
      "pears": false})} you can invoke <i>R.pick(['apples'], basket)</i>, to get
      {prettify({apples: true})}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.pick(['apples'])</span>,
  },
  9: {
    "title": "Pick apples and pears from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": false,
      "pears": true
    },
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
  10: {
    "title": "Throw away pineapples from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": false,
      "pears": true
    },
    "resultOfLevel": {
      "apples": true,
      "pears": true
    },
    levelHeader: 'Guide to R.omit - ',
    guide: <span>
      You can use R.omit(<i>list of properties</i>, <i>object</i>) to get all properties of the object, omitting one you write.
      <br /><br />
      For example on this basket {prettify({
      "apples": true,
      "pineapples": true,
      "pears": false})} you can invoke <i>R.omit(['apples'], basket)</i>, to get
      {prettify({pineapples: true, pears: false})}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.omit(['pineapples'])</span>,
  },
  11: {
    "title": "Throw away apples and pears from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "pineapples": true,
    },
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.omit(['apples', 'pears'])</span>,
  },
  "12": {
    "title": "Remove pears from the basket and changed apples to true",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
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
    levelHeader: 'Composing of the functions - ',
    guide: <span>
      In Ramda.js, you can use R.compose(<i>fn1</i>, <i>fn2</i>, <i>fn3</i>...)(object) to make number of transformations
      on an object. Compose performs <i>right</i> to <i>left</i> composition of functions, opposed to R.pipe, that performs
      <i>left</i> to <i>right</i> composition.
      <br /><br />
      For example on this basket {prettify({
      "apples": true,
      "pineapples": true,
      "pears": false})}<br />
      you can invoke <br /><br />
        <i>R.compose(<br />
        <div className='margin-left__30'>
          R.omit(['pineapples', 'pears']), <br />
          R.assoc('melons', true)<br />
        </div>
        )(basket)</i><br /><br /> to get
      {prettify({apples: true, melons: true})}
      <br />
      <i>Note - even though we are talking about objects, compose can be used even on simple data types and arrays.</i>
    </span>,
    solution: <span>R.dissoc('pears') with R.assoc('apples', true)
      <div className='color__green display-flex'>
        or
      </div>
      R.omit(['pears']) with R.assoc('apples', true)
      <div className='color__green display-flex'>
        or
      </div>
      R.pick(['apples', 'pineapples']) with R.assoc('apples', true)
    </span>,
  },
  "13": {
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
  // "102": {
  //   "title": "Learn to assoc",
  //   "levelAssignment": {
  //     "apples": false,
  //     "pineapples": true,
  //     "pears": false
  //   },
  //   "resultOfLevel": {
  //     "apples": true,
  //     "pineapples": true,
  //     "pears": false
  //   },
  //   getUserInput: (complete) =>
  //     <div>
  //         <span>
  //           R.compose(
  //           <br />
  //           <div className='margin-left__30'>
  //             R.{complete}
  //           </div>
  //           <br />
  //           )(basket);
  //         </span>
  //     </div>,
  //   "solution": [
  //     "Try to use assoc to throw some apples into the basket",
  //     "Try using R.assoc('apples',___)"
  //   ]
  // }
}
export default levels
