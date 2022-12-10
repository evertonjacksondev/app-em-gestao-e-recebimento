import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>
)
