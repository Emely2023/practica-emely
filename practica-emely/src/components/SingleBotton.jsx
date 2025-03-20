import './Alerta.css'

const SingleBotton = ({titulo}) => {

    return (
        <>
        <div class="dropdown">
  <button className="Singlebutton" type="Singlebutton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </>
    )
 }      
 export default SingleBotton;