import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { Toaster } from './components/ui/toaster.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <Toaster />
    </StrictMode>
    );
