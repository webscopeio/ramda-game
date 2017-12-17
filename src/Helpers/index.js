import React from 'react';

// Functions mainly for highlighting of objects and arrays.
// Credit for these functions goes to https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
// I haven't wrote them.

function output(inp) {
  return <pre dangerouslySetInnerHTML={{__html: inp}} />
}

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return 'const basket = ' + json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>'
  })
}

export function prettify (object) {
  return typeof object === 'object'
    ? output(syntaxHighlight(JSON.stringify(object, undefined, 4)))
    : output('const basket = { \n }')
}