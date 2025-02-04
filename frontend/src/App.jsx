import { BrowserRouter , Routes , Route} from "react-router-dom";
import { LoginPage,SignupPage, CreateProduct} from "./Routes.jsx";
import './App.css' ;
import Home from "./pages/Home.jsx";
function App (){
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/create-product" element={<CreateProduct />} />
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;