import { select } from 'xml-wrappers';
import { State } from './components/App';

function searchNewExpression(state: State, newExpression: string) {
  return {
    source: state.source,
    expression: newExpression,
    xmldoc: state.xmldoc,
    result: select(state.xmldoc, newExpression)
  };
}

function searchNewXML(state: State, newXML: string) {
  const xmldoc = new DOMParser().parseFromString(newXML, "text/xml");

  return {
    source: newXML,
    expression: state.expression,
    xmldoc: xmldoc,
    result: select(xmldoc, state.expression)
  };
}

export { searchNewExpression, searchNewXML };
