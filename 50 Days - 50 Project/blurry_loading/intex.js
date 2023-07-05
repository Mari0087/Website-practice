const BluerEl = document.getElementById('bg-img')
const loaderEl =  document.getElementById('loadingEl')
let count=100
let i=0
setInterval(lazyLoading,20)


function lazyLoading(){
    if (i<=100 && count>=0){
        BluerEl.style.filter=`blur(${count--}px)`;
        loaderEl.innerText=`${i++}%`;
    }
    highLoad()
}

function highLoad(){
    if (i==100){
        loaderEl.style.display='none';
    }
}