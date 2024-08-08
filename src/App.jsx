import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
    
   
  )
}

export default App
