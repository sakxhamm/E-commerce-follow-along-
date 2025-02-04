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
        <Route path="/Home" element= {<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;