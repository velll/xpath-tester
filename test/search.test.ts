import fs from 'fs';

import { State } from '../src/components/App'
import { select } from 'xml-wrappers'
import { searchNewExpression, searchNewXML } from '../src/search'

function buildOriginalState(): State {
  const file = fs.readFileSync('test/examples/example.tcx', 'utf8');
  const xmldoc = new DOMParser().parseFromString(file, "text/xml");
  
  return {
    source: file,
    expression: '//Activities',
    xmldoc: xmldoc,
    result: select(xmldoc, '//Activities')
  }
}

test('New state will show search results for a new expression', () => {
  const originalState = buildOriginalState();
  const newExpression = '//Trackpoint'
  
  const changedState = searchNewExpression(originalState, newExpression)

  expect(changedState.source).toBe(originalState.source)
  expect(changedState.xmldoc).toBe(originalState.xmldoc)
  
  expect(changedState.expression).toEqual(newExpression)
  expect(changedState.result).not.toEqual(originalState.result)

  // Example has exactly three trackpoints
  expect(changedState.result.length).toEqual(3)
});

test('State does not change Results if expression does not change', () => {
  const originalState = buildOriginalState();
  const newExpression = '//Activities'

  const changedState = searchNewExpression(originalState, newExpression)

  expect(changedState.source).toBe(originalState.source)
  expect(changedState.xmldoc).toBe(originalState.xmldoc)

  expect(changedState.expression).toEqual(originalState.expression)
  expect(changedState.result).toEqual(originalState.result)
});

test('New state will show new search results when the document changes', () => {
  const originalState = buildOriginalState();
  const newXML = fs.readFileSync('test/examples/bike.xml', 'utf8');

  const changedState = searchNewXML(originalState, newXML)
  
  expect(changedState.source).toEqual(newXML)
  expect(changedState.expression).toEqual(originalState.expression)

  expect(changedState.result).not.toEqual(originalState.result)

  // Example has a completely different structure as if a user just pasted their own xml
  expect(changedState.result.length).toBe(0)
});
