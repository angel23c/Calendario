import {type_events} from "./spanish.js"
import {newemployelisthmtl} from "./nodos.js"
export function addevents(event,color,employe){
    type_events.push({event,color,employe})
    eventhtmladd(employe,event,color)

}
export function eventhtmladd(employe,event,color){
    let employed = newemployelisthmtl(employe,event,color)
    eventos.appendChild(employed)
}


export function addevent(){
    Swal.fire({
        title: 'Agregar evento',
        html: `<input type="text" id="name" class="swal2-input" placeholder="Nombre del empleado">
        <input type="text" id="event" class="swal2-input" placeholder="Nombre del evento">
        <br><br>
        <p>selecciona el color del evento</p>
        <br>
        <input type="color" id="color" style="cursor:pointer">
        `,
        confirmButtonText: 'Registrar Evento',
        focusConfirm: false,
       // allowOutsideClick: false, 
        preConfirm: () => {
            const name = Swal.getPopup().querySelector('#name').value
            const event = Swal.getPopup().querySelector('#event').value
            const color = Swal.getPopup().querySelector('#color').value

            if (!event || !name){
            Swal.showValidationMessage(`Llena los campos`)
          }
          return { event: event, color: color, name:name}

        }
      }).then((result) => {
        addevents(result.value.event, result.value.color, result.value.name)        
      })
}
