import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { LoginPage, SignupPage, CreateProduct, Home } from "./Routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
        <Route path="/create-product" element= {<CreateProduct />} />
        <Route path="/" element= {<Home />} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;