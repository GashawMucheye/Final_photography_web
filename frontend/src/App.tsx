import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context-Api/theme-provider';
import { lazy } from 'react';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
