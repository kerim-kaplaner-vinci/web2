import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.tsx'
import './index.css'
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Global CSS reset from Material-UI */}
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
