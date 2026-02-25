import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RouteDetails from './pages/RouteDetails';
import Subscriptions from './pages/Subscriptions';
import Calculator from './pages/Calculator';
import GuideMe from './pages/GuideMe';
import MetroLines from './pages/MetroLines';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route" element={<RouteDetails />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/guide" element={<GuideMe />} />
        <Route path="/lines" element={<MetroLines />} />
      </Routes>
    </HashRouter>
  );
}
