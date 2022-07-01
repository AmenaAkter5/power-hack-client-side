import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SignUp></SignUp>
      <Login></Login>
    </div>
  );
}

export default App;
