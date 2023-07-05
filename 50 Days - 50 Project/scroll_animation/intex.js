const windowHeight=window.innerHeight;
const boxEl=document.querySelectorAll('.box')

window.addEventListener('scroll', translateBox)
function translateBox(){
    const boxTrack=windowHeight/4*3;

    boxEl.forEach(box => {
        const boxTop=box.getBoundingClientRect().top
        if(boxTrack > boxTop){
                box.classList.add('show')
        }else{
            box.classList.remove('show')
        }

    });


    
    
}