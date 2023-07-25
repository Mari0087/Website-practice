const Rbtn=document.getElementById("btn-right");
const Lbtn=document.getElementById("btn-left");
const bg=document.querySelector('body');
let count=0;
let pos=0;
const imgList=document.querySelectorAll('.img');

Rbtn.addEventListener('click',() => {
    imgList.forEach((img)=>{
        img.classList.remove('active');
    })
    count++;
    if(count>=imgList.length){
        count=count-imgList.length;

    }
    imgList[count].classList.add('active');
    bg.style.backgroundImage=`url(./img/m${count+1}.jpg)`
})

Lbtn.addEventListener('click',()=>{
    imgList.forEach((img)=>{
        img.classList.remove('active');
    })
    count--;
    if(count<0){
        count=count+imgList.length;
    }
    
    imgList[count].classList.add('active');
    bg.style.backgroundImage=`url(./img/m${count+1}.jpg)`
})