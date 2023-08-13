export function createDay(day,today) {
    let squard = document.createElement('div');
    let id = day;
    let time = text(day);
    squard.appendChild(time);
    today?squard.classList.add('col-2', 'squard_today'):squard.classList.add('col-2', 'squard'); 
    squard.addEventListener('click', addEventClickListener);
    return squard;
}

function text(text) {
    let p = document.createElement('p');
    p.classList.add('time'); // Agrega la clase 'time'
    p.textContent = text;
    return p;
}
function text2(text) {
    let p = document.createElement('p');
    p.textContent = text;
    return p;
}
export function newemployelisthmtl(employe,type_event,colorhex) {
    let div = document.createElement('div');
    div.classList.add("col-4","text-center","contenedor")
    let events = document.createElement("div")
    let employed = text2(employe)
    let event = text2(type_event) 
    let color = text2("")
    employed.classList.add("col-12"); //
    div.appendChild(document.createElement("br"));
    event.classList.add("col-6","text-center")
    color.classList.add("col-2","colors","text-center");
    div.appendChild(employed);
    events.classList.add("row","col-12");
    events.appendChild(event);
    events.appendChild(color);
    color.style.backgroundColor = `${colorhex}`;
    
    div.appendChild(events);
    return div;

}

function addEventClickListener() {
    const clickedDiv = this;
    alert(clickedDiv.firstChild.textContent);
    
}


