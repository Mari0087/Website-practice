const tagsEl=document.getElementById("tag");
const textAreaEl=document.getElementById("choice");
let count=0;
textAreaEl.addEventListener('keyup',keys=>
{
    createTag(keys.target.value)
    const createdTags=document.querySelectorAll('.tagCont');
    if(keys.key=='Enter' && createdTags.length>1){

        randomSelecter(createdTags)
    }
})

function createTag(keys){
    const key=keys.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML='';
    key.forEach(element => {
        const tagEl=document.createElement('span');
        tagEl.classList.add('tagCont');
        tagEl.innerHTML=element;
        tagsEl.appendChild(tagEl);
    });
    
}

function randomSelecter(createdTags){
    const timer=setInterval(()=>{
        randomtag(createdTags)
        count+=100
        console.log(count)
        if(count==5000){
            clearInterval(timer)
            count=0
        }
    },150)
    
    
}

function randomtag(createdTags){
    const randomtag=createdTags[Math.floor(Math.random() * createdTags.length)];
    createdTags.forEach(oneTag =>{
        oneTag.classList.remove('randomtag');
    })
    randomtag.classList.add('randomtag');
}