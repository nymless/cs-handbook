export const BreadthFirstSearch = () => {
  return (
    <>
      <p>
        Время выполнения O(V+E). V-количество вершин графа, E-количество рёбер
        графа
      </p>
      <ol>
        <li className="list-item">
          Создаем структуру данных очередь на основе списка. В примере
          используется массив, но работа с массивом медленее.
        </li>
        <li className="list-item">
          В очередь добавляются все соседние узлы корневого узла.
        </li>
        <li className="list-item">
          Создается массив для хранения уже проверенных узлов.
        </li>
        <li className="list-item">
          Берем первый узел из очереди. Проверяем что он отсутсвует в массиве
          проверенных узлов.
        </li>
        <li className="list-item">
          Проверяем его на соответствие условиям. Если успешно, значит узел
          найден.
        </li>
        <li className="list-item">
          Иначе добавляем в конец очереди все его соседние узлы, а сам узел
          добавляем в массив проверенных узлов.
        </li>
        <li className="list-item">
          Повторяем алгоритм с п.4 до тех пор пока либо не найдем нужных узел,
          либо очередь не опустеет.
        </li>
      </ol>
      <p>
        Функция получает направленный граф, в виде именнованного списка массивов
        соседних узлов, и корневой узел для поиска. Находит наиболее близкий к
        корню узел, удовлетворяющий условиям указанным в функции isDesired.
      </p>
    </>
  );
};
