import * as React from "react";
import Inputs from "./Inputs";
import Results from "./Results";

import { searchNewExpression, searchNewXML } from '../search';


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
    this.setState(state => searchNewExpression(state, newExpression));
  }

  changeXML(newXML: string){
    this.setState(state => searchNewXML(state, newXML));
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

export { App, State };
