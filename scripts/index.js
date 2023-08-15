import { generateMonth,nextMonth,previousMonth} from "./years.js";
import {addevent} from "./predefinir.js"
window.onload = function(){
    //addevent();
    generateMonth();

}
after.addEventListener('click', previousMonth);
before.addEventListener('click', nextMonth);
newevent.addEventListener('click', addevent);
