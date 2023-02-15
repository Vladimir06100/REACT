import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import About from './components/About';
import MainLayout from './layouts/MainLayout';
import './App.css';
import Courses from './components/Courses';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}>
            {/* по индексу указать индекс */}
            <Route
              index
              element={<Home />}
            />
            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="contacts"
              element={<Contact />}
            />
            <Route
              path="courses"
              element={<Courses />}
            />
            <Route
              path="courses/:slug"
              element={<Courses />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
