import './Alerta.css'

const Listgroup = ({titulo}) => {

    return (
        <>

<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input>
    <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched"></input>
    <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched"></input>
    <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
  </li>
</ul>

    </>
    )
 }      
export default Listgroup;