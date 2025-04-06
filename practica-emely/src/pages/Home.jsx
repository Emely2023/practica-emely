import Boton from '../components/Boton'
import Alerta from '../components/Alerta'
import Acordeon from '../components/acordeon'
import Bottongroup from '../components/Bottongroup'
import Toolbar from '../components/Toolbar'
import SingleBotton from '../components/SingleBotton'
import Dropdown from '../components/Dropdown'
import Listgroup from '../components/Listgroup'
import Closeboton from '../components/closeboton'
import Collapse from '../components/collapse'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import OffCanvas from '../components/OffCanvas'
import Pagination from '../components/Pagination'
import Sizing from '../components/Sizing'
import Placeholder from '../components/Placeholder'
import Colors from '../components/Colors'
import Disabled from '../components/Disabled'
import Progress from '../components/Progress'
import Spiners from '../components/Spiners'

function Home() {

  return (
    <>
        <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido 🎉</h1>
      <p className="text-lg text-gray-700">
        Explore las secciones del menú para probar las funcionalidades.
      </p>
    </div>
      <Boton
      titulo ={"Boton 1"}
      /> 
      <Alerta/>
      <Acordeon/>
      <Bottongroup/>
      <Toolbar/>
      <SingleBotton/>
      <Dropdown/>
      <Listgroup/>
      <Closeboton/>
      <Collapse/>
      <Modal/>
      <Navbar/>
      <OffCanvas/>
      <Pagination/>
      <Sizing/>
      <Placeholder/>
      <Colors/>
      <Disabled/>
      <Progress/>
      <Spiners/>






    </>
  )
}

export default Home;
