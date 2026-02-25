import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RouteDetails from './pages/RouteDetails';
import Subscriptions from './pages/Subscriptions';
import Calculator from './pages/Calculator';
import GuideMe from './pages/GuideMe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route" element={<RouteDetails />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/guide" element={<GuideMe />} />
      </Routes>
    </BrowserRouter>
  );
}
