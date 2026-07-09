import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ThemeContextProvider from './context/themeContext'

import Dashboard from './pages/Dashboard'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App