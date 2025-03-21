import './Alerta.css'

const Placeholder = ({titulo}) => {

    return (
        <>
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>



    </>
    )
 }      
export default Placeholder;