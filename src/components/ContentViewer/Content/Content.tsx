import React from 'react';
import { Code } from './Code/Code';

type Props = {
  name: string;
  text: () => JSX.Element;
  code: string;
};

export const Content: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.text()}
      <Code code={props.code} language="javascript" />
    </div>
  );
};
