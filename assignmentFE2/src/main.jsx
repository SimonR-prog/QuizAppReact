import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Stylings/index.css'
import App from './App.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
