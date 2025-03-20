
import './App.css'
import Boton from './components/Boton'
import Alerta from './components/Alerta'
import Acordeon from './components/acordeon'
import Bottongroup from './components/Bottongroup'
import Toolbar from './components/Toolbar'
import SingleBotton from './components/SingleBotton'
import Dropdown from './components/Dropdown'



function App() {

  return (
    <>
      <h1>Holaa</h1>
      <Boton
      titulo ={"Boton 1"}
      /> 
      <Alerta/>
      <Acordeon/>
      <Bottongroup/>
      <Toolbar/>
      <SingleBotton/>
      <Dropdown/>

    </>
  )
}

export default App;
