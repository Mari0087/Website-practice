const button = document.querySelector('.button');


button.addEventListener('click',(e)=>{
    button.innerHTML='Click Me';
    const x=e.clientX;
    const y=e.clientY;
    const buttonTop=e.target.offsetTop;
    const buttonLeft=e.target.offsetLeft;
    
    targetX=x-buttonLeft;
    targetY=y-buttonTop;
    button.innerHTML+='<span class="circle"></span>';
    const circle = document.querySelector('.circle');
    circle.style.top=`${targetY}px`;
    circle.style.left=`${targetX}px`;
    
    
});

//Button Ripple Effect