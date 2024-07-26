import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import About from './app/pages/About';
import Home from './app/pages/Home';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
