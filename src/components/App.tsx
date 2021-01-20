import * as React from "react";
import Inputs from "./Inputs";
import Results from "./Results";

import { select } from '../xpath';

class App extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      source: props.defaults.xmlstring,
      xmldoc: props.defaults.xmldoc,
      expression: props.defaults.expression,
      result: []
    };

    this.changeExpression = this.changeExpression.bind(this);
    this.changeXML = this.changeXML.bind(this);
  }

  changeExpression(newExpression: string){
    this.setState(state => ({
      source: state.source,
      expression: newExpression,
      xmldoc: state.xmldoc,
      result: this.search(state.xmldoc, newExpression)
    }));
  }

  changeXML(newXML: string){
    this.setState(state => {
      const xmldoc = new DOMParser().parseFromString(newXML, "text/xml");

      return {
        source: newXML,
        expression: state.expression,
        xmldoc: xmldoc,
        result: this.search(xmldoc, state.expression)
      };
    });
  }

  search(xmldoc: Document, expression: string) {
    return select(xmldoc, expression);
  }

  public render() {
   return <div className='container'>
            <Inputs expression={this.state.expression}
                    document={this.state.source}
                    changeExpression={this.changeExpression}
                    changeXML={this.changeXML}></Inputs>
            <hr></hr>
            <Results nodes={this.state.result}></Results>
          </div>;
  }
}

interface Props {
  defaults: {
    xmlstring: string,
    xmldoc: Document,
    expression: string
  }
}

interface State {
  source: string
  expression: string
  xmldoc: Document
  result: Node[]
}

export { App };
