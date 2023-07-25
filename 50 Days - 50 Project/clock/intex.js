let body=document.querySelector('body');
let button=document.querySelector('.btn');
let hourNeedle=document.querySelector('.hour');
let minuteNeedle=document.querySelector('.minute');
let secondNeedle=document.querySelector('.second');
let timeEl=document.querySelector('.time');
let dateEl=document.querySelector('.date');
let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

button.addEventListener('click',()=>{
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        button.classList.remove('btn-dark');
        button.classList.add('btn-light');
        button.innerHTML='Light Mode';
    }else{
        body.classList.remove('dark');
        body.classList.add('light');
        button.classList.remove('btn-light');
        button.classList.add('btn-dark');
        button.innerHTML='Dark Mode';
    }
});

function setTime(){
    let time =new Date();
    const realHour=time.getHours();
    const hour = realHour%12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const month=time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    let noon='PM'
    if(realHour>12){
        noon='PM'
    }else{
        none='AM'
    }

    hourNeedle.style.transform= `translate(-50%,-100%) rotate(${scale(hour,0,12,0,360)}deg)`;
    minuteNeedle.style.transform= `translate(-50%,-100%) rotate(${scale(minute,0,60,0,360)}deg)`;
    secondNeedle.style.transform= `translate(-50%,-100%) rotate(${scale(second,0,60,0,360)}deg)`;
    
    timeEl.innerHTML=`${hour}:${minute} ${noon}`;
    dateEl.innerHTML=`${days[day]},${months[month]} ${date}`;
    
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime()

setInterval(setTime,1000);

