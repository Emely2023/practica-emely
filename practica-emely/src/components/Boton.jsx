import './Boton.css'

const Boton =({titulo}) =>{

    const estilo={
        boton:{
        fontSize: '50px',

        }
        
    }
    return(

        <button type="button" className='boton'>{titulo}</button>
       
        
    )
}
export default Boton;