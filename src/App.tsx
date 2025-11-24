import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
