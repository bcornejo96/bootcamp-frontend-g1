import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoyoutBase from "./loyouts/LoyoutBase"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"



const App = () => {
  return (
    <BrowserRouter>
      <LoyoutBase>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
      </LoyoutBase>
    </BrowserRouter>
  )
}

export default App
