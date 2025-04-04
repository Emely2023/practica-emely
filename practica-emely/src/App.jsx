
import './App.css'

import  {BrowserRouter as Router, Routes, Route} from "react-router"
import Home from './pages/Home';
import Calculadora from './pages/Calculadora';
import Card from './pages/Card';
import Registro from './pages/Registro';
import ToDo from './pages/ToDo';
import Nav from './components/Nav';

function App() {

  return (
    <>
  <Router>
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Card" element={<Card />} />
    <Route path="/Calculadora" element={<Calculadora />} />
    <Route path="/Registro" element={<Registro />} />
    <Route path="/ToDoList" element={<ToDo />} />
  </Routes>
</Router>
      




    </>
  )
}

export default App;
