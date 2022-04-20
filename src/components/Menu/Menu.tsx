import styles from './Menu.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Algorithms } from '../../assets/algorithms/algorithms';

type Props = {
  algorithms: Algorithms;
};

export const Menu: React.FC<Props> = (props) => {
  return (
    <div className={styles.menu}>
      <ul>
        {props.algorithms.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
