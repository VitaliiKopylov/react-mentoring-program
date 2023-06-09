import { Route, Routes, useLocation, Link } from 'react-router-dom';

import MovieListPage from './views/MovieListPage';
import PageNotFound from './views/PageNotFound';
import AddMoviePage from './views/AddMoviePage';
import EditMoviePage from './views/EditMoviePage';
import MovieDetails from '@components/MovieDetails';
import AppHero from '@components/AppHero/AppHero';

import './assets/styles/vars.css';
import './assets/styles/typography.css';
import './app.scss';
import logo from './assets/images/logo.svg';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-container container">
          <Link to="/">
            <img src={logo} alt="App" />
          </Link>
          {!location.pathname.match(/\/\d+/g) && (
            <Link className="add-btn" to="/new">
              + add movie
            </Link>
          )}
        </div>
      </header>
      <div className="app__main">
        <Routes>
          <Route element={<MovieListPage />}>
            <Route path="/:movieId" element={<MovieDetails />}>
              <Route path="edit" element={<EditMoviePage />} />
            </Route>
            <Route path="/" element={<AppHero />}>
              <Route path="/new" element={<AddMoviePage />} />
            </Route>
          </Route>
          <Route path="/not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <footer className="app__footer">
        <div className="app__footer-container container">
          <a href="/">
            <img src={logo} alt="App" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
