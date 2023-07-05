const xboxhover=document.getElementById('ps5-div')
const ps5hover=document.getElementById('xbox-div')

const ps5Image=document.getElementById('ps5-img')
const xboxImage=document.getElementById('xbox-img')

const ps5Diem=document.getElementById('ps5-diem')
const xboxDiem=document.getElementById('xbox-diem')

function ps5Expand(){
    ps5Image.style.width='70vw';
    ps5Diem.style.width='70vw';
    xboxImage.style.width='30vw';
    xboxDiem.style.width='30vw';
}

function xboxExpand(){
    ps5Image.style.width='30vw';
    ps5Diem.style.width='30vw';
    xboxImage.style.width='70vw';
    xboxDiem.style.width='70vw';
}

function notHover(){
    ps5Image.style.width='50vw';
    ps5Diem.style.width='50vw';
    xboxImage.style.width='50vw';
    xboxDiem.style.width='50vw';
}

ps5hover.addEventListener('mouseover',xboxExpand)
xboxhover.addEventListener('mouseover',ps5Expand)

ps5hover.addEventListener('mouseout',notHover)
xboxhover.addEventListener('mouseout',notHover)