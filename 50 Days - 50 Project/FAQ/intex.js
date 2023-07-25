let faq=document.querySelectorAll('.faq');
let faqText=document.querySelector('.faq-text');

let count=1;    


faq.forEach(faqEl => {
    faqEl.addEventListener('click',()=>{
        if(count==0){
            Expend(faqEl);
            count=1;
        }else{
            unExpend(faqEl);
            count=0;
        }
    })
})

function unExpend(faqEl){
    faqEl.style.height = '70px';
    faqEl.style.overflow = 'hidden';
}

function Expend(faqEl){
    faqEl.style.height = 'auto';
    faqEl.style.overflow = 'auto';
}