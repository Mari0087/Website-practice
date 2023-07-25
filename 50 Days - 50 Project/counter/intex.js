const wave=document.querySelector('.wave');
const countEl=document.querySelector('.count')
let count=0;
let num=0

setInterval(()=>{
    
    console.log(count)
    wave.style.transform= `translate(-50%,-100%) rotate(${count}deg)`;
    count+=360;
    num++
    countEl.innerHTML=num;
},1000)