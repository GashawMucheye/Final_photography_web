import Home from './pages/Home';
import Layout from './components/layout';
import { ThemeProvider } from './components/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
// import { Button } from './components/ui/button';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
