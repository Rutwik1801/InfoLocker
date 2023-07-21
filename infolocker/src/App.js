import BackgroundWrapper from "./components/backgroundWrapper/BackgroundWrapper";
import Login from "./components/logincomponent/Login";
import LoginForm from "./components/logincomponent/LoginForm";
import {BrowserRouter , Routes  , Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Login/>} />
      </Routes>
    
    
    
    </BrowserRouter>
    
      
  );
}

export default App;
