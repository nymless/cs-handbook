import styles from './ContentViewer.module.css';
import { Routes, Route } from 'react-router-dom';
import { Content } from './Content/Content';
import { Algorithms } from '../../assets/algorithms/algorithms';

type Props = {
  algorithms: Algorithms;
};

export const ContentViewer: React.FC<Props> = (props) => {
  return (
    <div className={styles.contentViewer}>
      <Routes>
        {props.algorithms.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Content
                  name={item.name}
                  text={item.text}
                  code={String(item.code)}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};
