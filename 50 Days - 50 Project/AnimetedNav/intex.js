const navEl=document.getElementById('nav');
const button=document.getElementById('button')
let active='true';
button.addEventListener('click',() => {
    if(active=='true'){
        console.log('true')
        navEl.classList.add('active');
        active='false';
    }else{
        navEl.classList.remove('active');
        active='true';
    }
    
})

