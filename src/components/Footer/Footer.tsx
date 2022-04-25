import React from 'react';
import styles from './Footer.module.css';

type Props = {};

export const Footer: React.FC<Props> = (props) => {
  return (
    <div className={styles.footer}>
      <div>Developed by: Ivan Baklanov</div>
      <div>
        <a className={styles.link} href="https://github.com/nymless">Github link: nymless</a>
      </div>
    </div>
  );
};
