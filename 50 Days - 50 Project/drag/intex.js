const fill=document.querySelector('.fill');
const empties=document.querySelectorAll('.empty');

fill.addEventListener('dragstart',drapStart)
fill.addEventListener('dragend',drapEnd)

for(const empty of empties){
    empty.addEventListener('dragover',drapOver)
    empty.addEventListener('dragleave',drapLeave)
    empty.addEventListener('dragenter',drapEnter)
    empty.addEventListener('drop',drapDrop)
}

function drapStart(){
    this.className +=' hold';
}

function drapEnd(){
    this.className='fill';
}

function drapOver(e){
    e.preventDefault();
}

function drapLeave(){
    this.className ='empty';
}

function drapEnter(e){
    e.preventDefault();
    this.className +=' hovered';
}

function drapDrop(){
    this.className = 'empty';
    this.append(fill);
}