const fullGlass=document.getElementById('main-glass');
const currentGlass=document.getElementById('main-glass-dup');
const smallGlass=document.querySelectorAll('#glass');
let count=0;
let height=0;
let mTop=205;
let waterper=0;
let waterQua=2;

smallGlass.forEach(glass => {
    glass.classList.add('glass');
    glass.addEventListener('click', () => {
        if(glass.classList.contains('glass')){
        if(height<=200){
            height+=25;
            mTop-=25;
            waterper+=12.5;
            waterQua-=0.25;
            count++;
            glass.classList.remove('glass');
            glass.style.backgroundColor ='#58A4F4';
        } 
    }else{
        
            height-=25;
            mTop+=25;
            waterper-=12.5;
            waterQua+=0.25;
            count--;
            glass.style.backgroundColor ='#fff';
            glass.classList.add('glass');
        
    }
       
        waterFull()
    })


    function waterFull(){
        
            if(count==1){
                fullGlass.style.display='flex';
                fullGlass.style.height=`${height}px`;
                fullGlass.style.marginTop='180px';
                fullGlass.innerHTML=`${waterper}%`
                currentGlass.innerHTML=`${waterQua}L <br><span>Remained</span>`
            }else if(count>1){
                fullGlass.style.display='flex';
                fullGlass.style.height=`${height}px`;
                fullGlass.style.marginTop=`${mTop}px`;
                fullGlass.innerHTML=`${waterper}%`
                currentGlass.innerHTML=`${waterQua}L <br><span>Remained</span>`
            }else if(count==0){
                fullGlass.style.display='none';
            }
    }
})




