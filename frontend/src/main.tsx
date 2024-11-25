import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n.ts'; // Import the i18n configuration
import { MyContextProvider } from './context-Api/toggle-menu.tsx';
const LoadingFallback = () => (
  <div className="text-center bg-red-600">Loading page...</div>
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyContextProvider>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </MyContextProvider>
  </StrictMode>
);
