import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout';

import { Home, Feed, Dashboard, Gallery } from './pages';

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
