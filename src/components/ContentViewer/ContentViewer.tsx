import { Route, Routes } from 'react-router-dom';
import { Algorithms } from '../../models/algorithms';
import { Content } from './Content/Content';
import styles from './ContentViewer.module.css';
import { Home } from './Home/Home';

type Props = {
  algorithms: Algorithms;
};

export const ContentViewer: React.FC<Props> = (props) => {
  return (
    <div className={styles.contentViewer}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {props.algorithms.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Content
                  name={item.name}
                  text={item.text}
                  code={item.code}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};
