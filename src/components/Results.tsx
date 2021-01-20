import React from 'react';
import SearchResult from './SearchResult';

function empty() {
  return <i>Search results will show up here</i>;
}

function allResults(nodes: Node[]) {
  const title = `Results: ${nodes.length}`;

  return  <div>
            <h2 className="title is-4">{title}</h2>
            <pre>
              { nodes.map((node, i) => <SearchResult node={node} key={i}></SearchResult>) }
            </pre>

          </div>;
}

function Results({nodes}: Props) {
  return  <div className="container">
            { nodes.length > 0 ? allResults(nodes) : empty() }
          </div>;
}

interface Props {
  nodes: Node[]
}

export default Results;