import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
