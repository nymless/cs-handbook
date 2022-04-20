import React, { useEffect } from 'react';
import styles from './Code.module.css';
import Prism from '../../../../utils/prismjs/prism.js';
import '../../../../utils/prismjs/prism.css';

type Props = {
  code: string;
  language: string;
};

export const Code: React.FC<Props> = (props) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={styles.code}>
      <pre>
        <code className={`language-${props.language}`}>{props.code}</code>
      </pre>
    </div>
  );
};
