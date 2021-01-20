import React from 'react';

const serializer = new XMLSerializer();

function SearchResult({node}: Props) {
  return  <code>{serializer.serializeToString(node)}</code>;
}

interface Props {
  node: Node
}

export default SearchResult;