import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import Dashboard from './pages/Dashboard'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App