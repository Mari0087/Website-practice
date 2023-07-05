const nextEl=document.getElementById('next')
const prevEl=document.getElementById('prev')
const lineEl=document.getElementById('proess_line')
const c2El=document.getElementById('c2')
const c3El=document.getElementById('c3')
const c4El=document.getElementById('c4')
let count=0

nextEl.addEventListener('click',function(){
    count+=1
    if(count==1){
        lineEl.style.width='14%';
        c2El.style.borderColor = "blue"
        c2El.style.transitionDelay='1s'
        prevEl.disabled = false;
    }else if(count==2){
        lineEl.style.width='28%';
        c3El.style.borderColor = "blue"
        c3El.style.transitionDelay='1s'
        prevEl.disabled = false;
    }
    else if(count==3){
        lineEl.style.width='42%'
        c4El.style.borderColor = "blue"
        c4El.style.transitionDelay='1s'
        prevEl.disabled = false;
        nextEl.disabled = true;
    }
})

prevEl.addEventListener('click',function(){
    count-=1
    if(count==2){
        lineEl.style.width='28%';
        c4El.style.borderColor = "#A2A2A5"
        c4El.style.transitionDelay='0s'
        nextEl.disabled = false;
    }else if(count==1){
        lineEl.style.width='14%';
        c3El.style.borderColor = "#A2A2A5"
        c3El.style.transitionDelay='0s'
        nextEl.disabled = false;
    }
    else if(count==0){
        lineEl.style.width='0%'
        c2El.style.borderColor = "#A2A2A5"
        c2El.style.transitionDelay='0s'
        nextEl.disabled = false;
        prevEl.disabled = true;
    }
})