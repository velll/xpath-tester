import React from 'react';
import { HighlightedCode } from './HighlightedCode';

const serializer = new XMLSerializer();

function SearchResult({node}: Props) {
  return  <HighlightedCode language='xml'>
             {serializer.serializeToString(node)}
          </HighlightedCode>;
}

interface Props {
  node: Node
}

export default SearchResult;