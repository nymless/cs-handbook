export const BinarySearch = () => {
  return (
    <>
      <p>Время выполнения O(log n).</p>
      <ol>
        <li className="list-item">
          Задаются границы поиска равные размеру массива.
        </li>
        <li className="list-item">
          Выбирается центральное значение из этого диапазона.
        </li>
        <li className="list-item">
          Производится проверка является ли это значение искомым и если да, то
          возвращается.
        </li>
        <li className="list-item">
          Если значение не является искомым и оно больше его, то выбирается
          новый диапазон слева от значения. Если меньше, то справа.
        </li>
        <li className="list-item">
          Алгоритм повторяется с п.2. до тех пор пока, либо значение не будет
          найдено, либо диапазон не уменьшится до 1.
        </li>
      </ol>
      <p>
        Функция получает отсортированный массив и значение для поиска. Если
        значение присутствует в массиве, то функция возвращает его позицию.
      </p>
    </>
  );
};
