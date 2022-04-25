import React from 'react';
import styles from './Header.module.css';

type Props = {};

export const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles.logo}>Computer Science Handbook</div>
    </div>
  );
};
