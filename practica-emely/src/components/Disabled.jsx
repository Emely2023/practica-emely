import './Alerta.css'

const Disabled = ({titulo}) => {

    return (
        <>
   <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
        </>
    )
 }      
 export default Disabled;