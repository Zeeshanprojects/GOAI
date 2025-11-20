import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Only necessary JS for navbar toggle
import Collapse from "bootstrap/js/dist/collapse";
import "./assets/Fonts/Fonts.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
