const nav_icon=document.getElementById('nav')
const close_icon=document.getElementById('close')
const fullDiv=document.getElementById('container')
const manuCont=document.getElementById('menu_content')

let click='True'
nav_icon.addEventListener('click',function(){
    if(click=='True'){
        fullDiv.style.transform='rotate(-15deg)'
        fullDiv.style.left='100px'
        fullDiv.style.top='-240px'
        manuCont.style.left='25px'
        manuCont.style.top='500px'
        click='False'
    }else if(click=="False"){
        fullDiv.style.transform='rotate(0deg)'
        fullDiv.style.left='0px'
        fullDiv.style.top='0px'
        manuCont.style.left='-250px'
        click='True'
    }
})
