import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About'
import BolyticsPlus from './pages/BolyticsPlus';
import { ThemeContextProvider } from './hooks/context/ThemeContext';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/bolytics-plus' element={<BolyticsPlus />} />
          <Route path='/about' element={<About />} />
          <Route path='/user-profile' element={<Profile />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App