import {days,months,currentDate} from "./spanish.js"
import {createDay} from "./nodos.js"
export function generateMonth(){
    const date = getMonthAnDays(currentDate)
    const numberDay = date[0]
    const day = days[date[1]]
    const month = months[date[2]]
    const year = date[3]
    const daysOfMonth = daysOfMoth(currentDate.getMonth(),currentDate.getFullYear())  
    generateDays(daysOfMonth)
    fecha.innerHTML= ` ${month} del año ${year}`
}

function generateDays(daysOfMonth) {
    calendary.innerHTML = "";
    let column = Node
    let today = new Date();
    for (let i = 1; i  <=daysOfMonth; i++) {
        if (i === 1 || i%5 === 0) {
            column = document.createElement('div');
            column.classList.add("row")
        }
        if (
            today.getDate() === i &&
            today.getFullYear() === currentDate.getFullYear() &&
            today.getMonth() === currentDate.getMonth()
          ) {
            calendary.appendChild(column.appendChild(createDay(i, true)));
          } else {
            calendary.appendChild(column.appendChild(createDay(i, false)));
          }
              
        
 }
}
export function nextMonth(){
    const date = generateDate(true);
    const dateText = generateMonth(currentDate)

}
export function previousMonth(){
    const date = generateDate(false);
    const dateText = generateMonth(currentDate)

}
function generateDate(month){
    month?currentDate.setMonth(currentDate.getMonth() + 1):currentDate.setMonth(currentDate.getMonth()-1)
}
function getMonthAnDays(date){
    const numberDay = date.getDate()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
return [numberDay,day,month,year]
}
function daysOfMoth(month, year) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
}

