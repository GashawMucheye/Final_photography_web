import Home from './pages/Home';
import Layout from './components/layout';
import { ThemeProvider } from './components/theme-provider';
// import { Button } from './components/ui/button';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        {/* <Button>click</Button> */}
        <Home />
      </Layout>
    </ThemeProvider>
  );
}
