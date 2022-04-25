import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ContentViewer } from './components/ContentViewer/ContentViewer';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { algorithms } from './models/algorithms';

function App() {
  return (
    <BrowserRouter basename="/cs-handbook">
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <nav className="nav">
          <Menu algorithms={algorithms} />
        </nav>
        <main className="main">
          <ContentViewer algorithms={algorithms} />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
