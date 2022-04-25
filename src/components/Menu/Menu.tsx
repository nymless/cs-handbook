import styles from './Menu.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Algorithms } from '../../models/algorithms';

type Props = {
  algorithms: Algorithms;
};

export const Menu: React.FC<Props> = (props) => {
  return (
    <div className={styles.menu}>
      <h3>Навигация</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            В начало
          </Link>
        </li>
        {props.algorithms.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              <Link className={styles.link} to={item.path}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
