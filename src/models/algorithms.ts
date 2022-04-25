import { binarySearch } from '../assets/algorithms/binary-search/binary-search';
import { BinarySearch } from '../assets/algorithms/binary-search/BinarySearch';
import { quickSort } from '../assets/algorithms/quick-sort/quick-sort';
import { QuickSort } from '../assets/algorithms/quick-sort/QuickSort';
import { selectionSort } from '../assets/algorithms/selection-sort/selection-sort';
import { SelectionSort } from '../assets/algorithms/selection-sort/SelectionSort';
import { breadthFirstSearch } from '../assets/algorithms/breadth-first-search/breadth-first-search';
import { BreadthFirstSearch } from '../assets/algorithms/breadth-first-search/BreadthFirstSearch';
import { dijkstrasAlgorithm } from '../assets/algorithms/dijkstras-algorithm/dijkstras-algorithm';
import { DijkstrasAlgorithm } from '../assets/algorithms/dijkstras-algorithm/DijkstrasAlgorithm';

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
