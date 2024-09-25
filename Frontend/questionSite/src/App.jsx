import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './LandingPage/Landing';
import { Mainpage } from './MainPage/MainPage';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/mainpage' element={<Mainpage></Mainpage>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
