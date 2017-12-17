import * as React from 'react'
import { prettify } from '../Helpers/index'

// Main levels for ramda game, which contains guides. For practise levels, navigate to ./PractiseLevels.js
const levels ={
  // Working with objects
  0: {
    "title": "Turn apples to true with R.assoc",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "newCategory": "Working with objects",
    "name": "R.assoc()",
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
      "pears": false
    },
    levelHeader: 'Guide to R.assoc: ',
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
    levelHeader: 'Guide to R.assocPath: ',
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
    levelHeader: 'Guide to R.dissoc: ',
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
    levelHeader: 'Guide to R.dissocPath: ',
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
    levelHeader: 'Guide to R.pick: ',
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
    levelHeader: 'Guide to R.omit: ',
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
  // Working with arrays
  6: {
    "title": "Add green melon object at the end of basket",
    "levelAssignment": [
      {color: 'red', name: 'Strawberry'},
      {color: 'yellow', name: 'Banana'},
    ],
    "name": "R.append()",
    newCategory: 'Working with arrays',
    "resultOfLevel": [
      {color: 'red', name: 'Strawberry'},
      {color: 'yellow', name: 'Banana'},
      {color: 'green', name: 'Melon'}
    ],
    levelHeader: 'Guide to R.append: ',
    guide: <span>
      You can use R.append(<i>value</i>, <i>array</i>) to add element at the end of given array.
      <br /><br />
      For example on this basket {prettify([
      {color: 'red', name: 'Apples'},
      {color: 'green', name: 'Apples'},
    ])} you can invoke <i>R.append({"{color: 'blue', name: 'Blueberry'}"}, basket)</i>, to get
      {prettify([
        {color: 'red', name: 'Apples'},
        {color: 'green', name: 'Apples'},
        {color: 'blue', name: 'Blueberry'}
      ])}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.append({"{color: 'green', name: 'Melon'}"})
    </span>,
  },
  7: {
    "title": "Add green melon object at the beginning of basket",
    "levelAssignment": [
      {color: 'red', name: 'Strawberry'},
      {color: 'yellow', name: 'Banana'},
    ],
    "name": "R.prepend()",
    "resultOfLevel": [
      {color: 'green', name: 'Melon'},
      {color: 'red', name: 'Strawberry'},
      {color: 'yellow', name: 'Banana'}
    ],
    levelHeader: 'Guide to R.prepend: ',
    guide: <span>
      You can use R.prepend(<i>value</i>, <i>array</i>) to add element at the start of given array.
      <br /><br />
      For example on this basket {prettify([
      {color: 'red', name: 'Apples'},
      {color: 'green', name: 'Apples'},
    ])} you can invoke <i>R.prepend({"{color: 'blue', name: 'Blueberry'}"}, basket)</i>, to get
      {prettify([
        {color: 'blue', name: 'Blueberry'},
        {color: 'red', name: 'Apples'},
        {color: 'green', name: 'Apples'}
      ])}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.prepend({"{color: 'green', name: 'Melon'}"})
    </span>,
  },
  8: {
    "title": "Take just 3 fruits out of the basket",
    "levelAssignment": [
      'pears', 'apples', 'melons', 'pineapples', 'avocado', 'olives'
    ],
    "name": "R.take()",
    "resultOfLevel": [
      'pears', 'apples', 'melons'
    ],
    levelHeader: 'Guide to R.take: ',
    guide: <span>
      You can use R.take(<i>number</i>, <i>array / string</i>) to get first <i>n</i> elements of an array or string.
      <br /><br />
      For example on this basket {prettify([
      'pears', 'apples', 'melons', 'pineapples', 'avocado', 'olives'
    ])} you can invoke <i>R.take(2, basket)</i>, to get
      {prettify(['pears', 'apples'])}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.take(3)</span>,
  },
  9: {
    "title": "Take just fruits before avocado",
    "levelAssignment": [
      'pears', 'plums', 'apples', 'melons', 'avocado', 'olives', 'pineapple'
    ],
    "name": "R.takeWhile()",
    "resultOfLevel": [
      'pears', 'plums', 'apples', 'melons'
    ],
    levelHeader: 'Guide to R.takeWhile: ',
    guide: <span>
      You can use R.takeWhile(<i>Predicate function</i>, <i>array / string</i>) to get all elements until predicate
      function returns false.
      <br /><br />
      For example on this basket {prettify([
      'pears', 'apples', 'melons', 'pineapples', 'avocado', 'olives'
    ])} you can invoke <i>R.takeWhile(x => x.length {'<'} 7, basket)</i>, to get
      {prettify(['pears', 'apples', 'melons'])}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.takeWhile(x => x !== avocado')</span>,
  },
  10: {
    "title": "Group fruits in the basket based on their color",
    "levelAssignment": [
      {color: 'red', name: 'Apples'},
      {color: 'red', name: 'Strawberries'},
      {color: 'yellow', name: 'Bananas'},
    ],
    "name": "R.groupBy()",
    "resultOfLevel": {
      "red": [
        {
          "color": "red",
          "name": "Apples"
        },
        {
          "color": "red",
          "name": "Strawberries"
        }
      ],
      "yellow": [
        {
          "color": "yellow",
          "name": "Bananas"
        }
      ]
    },
    levelHeader: 'Guide to R.groupBy: ',
    guide: <span>
      Splits a list into sub-lists stored in an object, based on the result of calling a String-returning function on
      each element, and grouping the results according to values returned.
      <br /><br />
      For example on this basket {prettify([
      {color: 'red', name: 'Apples'},
      {color: 'green', name: 'Apples'},
      {color: 'red', name: 'Strawberries'}
    ])} you can invoke <i>R.groupBy(R.prop('name'), basket)</i>, to get
      {prettify({
        "Apples": [
          {
            "color": "red",
            "name": "Apples"
          },
          {
            "color": "green",
            "name": "Apples"
          }
        ],
        "Strawberries": [
          {
            "color": "red",
            "name": "Strawberries"
          }
        ],
      })}
    </span>,
    getUserInput: (complete) =>
      <div>
        R.{complete}(basket)
      </div>,
    solution: <span>R.groupBy(fruit => fruit.color)
      <div className='color__green display-flex'>
        or
      </div>
      R.groupBy(R.prop('color'))
    </span>,
  },
  // Composing of functions
  11: {
    "title": "Remove pears from the basket and change apples to true",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
    },
    "newCategory": "Function composition",
    "name": "Introduction to R.compose()",
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
    levelHeader: 'Composing of the functions: ',
    guide: <span>
      In Ramda.js, you can use R.compose(<i>fn1</i>, <i>fn2</i>, <i>fn3</i>...)(object) to make number of transformations
      on an object. Compose performs <i>right</i> to <i>left</i> function composition, opposed to R.pipe, that performs
      <i> left</i> to <i>right</i> composition.
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
  "12": {
    "title": "Remove pears from the basket and change apples to true",
    "levelAssignment": {
      "apples": false,
      "pineapples": true,
      "pears": false
    },
    "resultOfLevel": {
      "apples": true,
      "pineapples": true,
    },
    "isPipe": true,
    "name": "Introduction to R.pipe()",
    getUserInput: (complete, complete2) =>
      <div>
          <span>
            R.pipe(
            <br />
            <div className='margin-left__30'>
              R.{complete}, <br />
              R.{complete2}
            </div>
            <br />
            )(basket);
          </span>
      </div>,
    levelHeader: 'Composing of the functions through R.pipe: ',
    guide: <span>
      In Ramda.js, you can use R.pipe(<i>fn1</i>, <i>fn2</i>, <i>fn3</i>...)(object) to make number of transformations
      on an object. Pipe performs <i>left</i> to <i>right</i> composition of functions, opposed to R.compose, that performs
      <i> right</i> to <i>left</i> composition.
      <br /><br />
      For example on this basket {prettify({
      "apples": true,
      "pineapples": true,
      "pears": false})}<br />
      you can invoke <br /><br />
        <i>R.pipe(<br />
        <div className='margin-left__30'>
          R.omit(['pineapples', 'pears']), <br />
          R.assoc('pineapples', true)<br />
        </div>
        )(basket)</i><br /><br /> to get
      {prettify({apples: true, pineapples: true})}
      <br />
      <i>Note - even though we are talking about objects, pipe can be used even on simple data types and arrays.</i>
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
    "title": "Add yellow lemons to the end of the basket, and then group them based on their color",
    "levelAssignment": [
      {color: 'red', name: 'Apples'},
      {color: 'red', name: 'Strawberries'},
      {color: 'yellow', name: 'Bananas'},
    ],
    "resultOfLevel": {
      "red": [
        {
          "color": "red",
          "name": "Apples"
        },
        {
          "color": "red",
          "name": "Strawberries"
        }
      ],
      "yellow": [
        {
          "color": "yellow",
          "name": "Bananas"
        },
        {
          "color": "yellow",
          "name": "Lemons"
        }
      ]
    },
    "name": "R.compose() - groupBy/append",
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
    levelHeader: 'Guide to this level:',
    guide: <span>
      Use knowledge from levels on R.append and R.groupyBy to finish this level.
    </span>,
    solution: <span>
      R.append({"{color: 'yellow', name: 'Lemons'}"}) with R.groupBy(R.prop('color'))
    </span>,
  },
  "14": {
    "title": "Add yellow lemons to the start of the basket, group them based on their color. Afterwards, remove all red fruits.",
    "levelAssignment": [
      {color: 'red', name: 'Apples'},
      {color: 'red', name: 'Strawberries'},
      {color: 'yellow', name: 'Bananas'},
    ],
    "resultOfLevel": {
      "yellow": [
        {
          "color": "yellow",
          "name": "Lemons"
        },
        {
          "color": "yellow",
          "name": "Bananas"
        }
      ]
    },
    "name": "R.compose() - groupBy/prepend/omit",
    getUserInput: (complete, complete2, complete3) =>
      <div>
          <span>
            R.compose(
            <br />
            <div className='margin-left__30'>
              R.{complete}, <br />
              R.{complete2}, <br />
              R.{complete3}
            </div>
            <br />
            )(basket);
          </span>
      </div>,
    levelHeader: 'Guide to this level:',
    guide: <span>
      Use knowledge from levels on R.prepend, R.groupyBy and R.omit to finish this level.
    </span>,
    solution: <span>
      R.prepend({"{color: 'yellow', name: 'Lemons'}"}) with R.groupBy(R.prop('color')) and R.omit('red')
    </span>,
  }
}
export default levels
