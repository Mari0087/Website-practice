const insertEl=document.querySelector('.insert')

window.addEventListener('keydown',(a)=>{
    b=a.key
    if(b==' '){
        b='Space'
    }
    insertEl.innerHTML=`<div class="key">
    ${b}
    <small>event.key</small>
</div>
<div class="key">
    ${a.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${a.code}
    <small>event.Code</small>
</div>`
})