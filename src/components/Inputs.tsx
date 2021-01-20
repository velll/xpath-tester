import React from 'react';

function Inputs({expression, document, changeExpression, changeXML}: Props) {
  const onExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeExpression((e.target as HTMLInputElement).value);
  };

  const onXMLChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeXML((e.target as HTMLTextAreaElement).value);
  };

  return  <div className="container">
            <div className="field">
              <label className="label">Enter XPath expression</label>
              <div className="control">
                <input className="input" type="text" defaultValue={expression} onChange={onExpressionChange}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Paste XML Document contents</label>
              <div className="control">
                <textarea className="textarea" defaultValue={document} onChange={onXMLChange}></textarea>
              </div>
            </div>
          </div>;
}

interface Props {
  expression: string,
  document: string,
  changeExpression: (arg0: string) => void,
  changeXML: (arg0: string) => void
}

export default Inputs;