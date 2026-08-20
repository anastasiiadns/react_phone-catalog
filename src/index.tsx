import { createRoot } from 'react-dom/client';
import { App } from './App';
import 'bulma/css/bulma.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductActionsProvider } from './context/ProductActionsContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ProductActionsProvider>
      <App />
    </ProductActionsProvider>
  </BrowserRouter>,
);
