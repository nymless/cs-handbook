export const QuickSort = () => {
  return (
    <>
      <p>Время выполнения O(n log n).</p>
      <ol>
        <li className="list-item">
          Используется рекурсия с базым случаем - массив состоит из 1 или 0
          элементов.
        </li>
        <li className="list-item">
          Производится выбор опорного элемента в центре массива.
        </li>
        <li className="list-item">
          Создаются два новых массива для хранения значений меньше опорного и
          больше опорного.
        </li>
        <li className="list-item">
          В цикле проходим по массиву и помещаем значения в соответствующие два
          массива.
        </li>
        <li className="list-item">
          Создаем новый массив содержащий подмассив меньших значений, опорного
          элемента, и подмассив больших значений.
        </li>
        <li className="list-item">
          Рекурсивно применяем алгоритм к новым массивам до достижения базового
          случая.
        </li>
      </ol>
      <p>
        Функция получает массив для сортировки. Возвращает новый отсортированный
        массив.
      </p>
    </>
  );
};