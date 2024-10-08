import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error/Error';
import Gallery from './pages/Gallery/Gallery';
import './style/style.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="*" element={<Error />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
