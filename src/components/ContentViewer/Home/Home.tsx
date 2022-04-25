import React from 'react';
import styles from './Home.module.css';

type Props = {};

export const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>Алгоритмы</h2>
      <p>Представлены следующие алгоритмы и код на языке JavaScript:</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          Бинарный поиск - для поиска элемента в отсортированном массиве.
        </li>
        <li className={styles.item}>
          Сортировки выбором - медленный алгоритм, лучше использовать быструю
          сортировку.
        </li>
        <li className={styles.item}>
          Быстрая сортировка - наиболее популярный алгоритм сортировки массивов.
        </li>
        <li className={styles.item}>
          Поиск в ширину - для поиска кратчайшего пути в невзвешенном,
          направленном, ацикличном графе.
        </li>
        <li className={styles.item}>
          Алгоритм Дейкстры - для поиска кратчайшего пути в положительно
          взвешенном, направленном, ацикличном графе.
        </li>
      </ul>
    </div>
  );
};
