const label1El=document.querySelector('#label1');
const label2El=document.querySelector('#label2');
const input1El = document.querySelector('#input1');
const input2El = document.querySelector('#input2');

input1El.addEventListener("focus", label1Wave,true);
input2El.addEventListener("focus", label2Wave,true);
// input2El.addEventListener("blur", notLabel2Wave,true);


input1El.addEventListener("keyup",function(){
    let inpu = document.querySelector('#input1').value;
    if(inpu==''){
        input1El.addEventListener("blur", notLabel1Wave,true);
    }
})

input2El.addEventListener("keyup",function(){
    let inpu1 = document.querySelector('#input2').value;
    if(inpu1==''){
        input2El.addEventListener("blur", notLabel2Wave,true);
    }else{
        input2El.addEventListener("focus", label2Wave,true);

    }
})

function label2Wave(){
     label2El.style.marginTop='-3px';

}

function notLabel2Wave(){
    label2El.style.marginTop='15px';
}

function label1Wave(){
    label1El.style.marginTop='-3px';
}

function notLabel1Wave(){
    label1El.style.marginTop='15px';
}