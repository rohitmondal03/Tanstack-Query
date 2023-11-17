import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import App from './App.tsx'
import './index.css'

const reactQueryClient= new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 2000,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
