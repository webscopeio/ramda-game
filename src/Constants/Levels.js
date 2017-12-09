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
    "name": "R.assoc()",
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
    "title": "Add some red apples to apples basket",
    "levelAssignment": {
      "apples": {
        green: true,
      },
      "pineapples": true,
      "pears": false
    },
    "name": "R.assocPath()",
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
  2: {
    "title": "Remove apples from basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "name": "R.dissoc()",
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
  3: {
    "title": "Remove red apples from the basket",
    "levelAssignment": {
      "apples": {
        green: true,
        red: true,
      },
      "pineapples": true,
      "pears": false
    },
    "name": "R.dissocPath()",
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
  4: {
    "title": "Pick just apples from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    "name": "R.pick()",
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
  5: {
    "title": "Throw away pineapples from the basket",
    "levelAssignment": {
      "apples": true,
      "pineapples": false,
      "pears": true
    },
    "name": "R.omit()",
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
  "6": {
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
    "name": "Composing of functions practise",
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
