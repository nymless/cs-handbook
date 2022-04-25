import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { algorithms } from './models/algorithms';
import { ContentViewer } from './components/ContentViewer/ContentViewer';
import { Menu } from './components/Menu/Menu';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
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
