import Home from './pages/Home';
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import { ThemeProvider } from './context-Api/theme-provider';
import { useTranslation } from 'react-i18next';
// import { Button } from './components/ui/button';

export default function App() {
  const { t } = useTranslation(); // Access the translation function

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path={`/${t('navigation.About').toLowerCase()}`}
              element={<About />}
            />
            <Route
              path={`/${t('navigation.Contact').toLowerCase()}`}
              element={<Contact />}
            />
            <Route
              path={`/${t('navigation.Gallery').toLocaleLowerCase()}`}
              element={<Gallery />}
            />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
