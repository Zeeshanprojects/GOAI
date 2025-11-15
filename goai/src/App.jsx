import './App.css'
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
