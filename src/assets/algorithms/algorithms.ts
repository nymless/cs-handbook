import { binarySearch } from './binary-search/binary-search';
import { BinarySearch } from './binary-search/BinarySearch';
import { quickSort } from './quick-sort/quick-sort';
import { QuickSort } from './quick-sort/QuickSort';
import { selectionSort } from './selection-sort/selection-sort';
import { SelectionSort } from './selection-sort/SelectionSort';
import { breadthFirstSearch } from './breadth-first-search/breadth-first-search';
import { BreadthFirstSearch } from './breadth-first-search/BreadthFirstSearch';
import { dijkstrasAlgorithm } from './dijkstras-algorithm/dijkstras-algorithm';
import { DijkstrasAlgorithm } from './dijkstras-algorithm/DijkstrasAlgorithm';

export const algorithms = [
  {
    name: 'Бинарный поиск',
    path: '/binary-search',
    code: binarySearch,
    text: BinarySearch,
  },
  {
    name: 'Сортировка выбором',
    path: '/selection-sort',
    code: selectionSort,
    text: SelectionSort,
  },
  {
    name: 'Быстрая сортировка',
    path: '/quicksort',
    code: quickSort,
    text: QuickSort,
  },
  {
    name: 'Поиск в ширину',
    path: '/breadth-first-search',
    code: breadthFirstSearch,
    text: BreadthFirstSearch,
  },
  {
    name: 'Алгоритм Дейкстры',
    path: '/dijkstras-algorithm',
    code: dijkstrasAlgorithm,
    text: DijkstrasAlgorithm,
  },
];

export type Algorithms = typeof algorithms;
