import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './layouts/header.tsx'
import Preheader from './layouts/preheader.tsx'
import Footer from './layouts/footer.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Preheader />
    <div className='sticky top-0 z-10 w-full bg-white'>
      <Header />
    </div>
    <App />
    <Footer />
  </BrowserRouter>
)
