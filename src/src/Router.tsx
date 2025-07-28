import { BrowserRouter, Route, Routes } from 'react-router';
import AboutPage from './pages/AboutPage';
import GenerateNamesPage from './pages/GenerateNamesPage';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<GenerateNamesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
