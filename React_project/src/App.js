import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Form';
import Regs from './components/regs';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Form' element={<Login/>}></Route>
          <Route exact path='/Regi' element={<Regs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
