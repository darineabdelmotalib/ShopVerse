import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import Menu from './components/Menu/Menu';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    
   
  )
}

export default App
