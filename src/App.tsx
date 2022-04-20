import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { algorithms } from './assets/algorithms/algorithms';
import { ContentViewer } from './components/ContentViewer/ContentViewer';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header className="header"></header>
        <nav className="nav">
          <Menu algorithms={algorithms} />
        </nav>
        <main className="main">
          <ContentViewer algorithms={algorithms} />
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
