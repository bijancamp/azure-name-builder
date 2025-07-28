import { BrowserRouter, Route, Routes } from 'react-router';
import AboutPage from './pages/AboutPage';
import GenerateNamesPage from './pages/GenerateNamesPage';
import NotFoundPage from './pages/NotFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<GenerateNamesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
