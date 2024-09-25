import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './LandingPage/Landing';
import { Mainpage } from './MainPage/MainPage';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='https://coding-school-200.vercel.app/' element={<Landing></Landing>}></Route>
      <Route path='https://coding-school-200.vercel.app/mainpage' element={<Mainpage></Mainpage>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
