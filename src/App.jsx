import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./Login";


function App() {


  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Cadastro/>}/>
    <Route path="/"element={<Login />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
