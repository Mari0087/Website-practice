const play1=document.getElementById('music1Btn')
const play2=document.getElementById('music2Btn')
const play3=document.getElementById('music3Btn')
const play4=document.getElementById('music4Btn')
const play5=document.getElementById('music5Btn')
const play6=document.getElementById('music6Btn')

play1.addEventListener('click',()=>{
    stopPlay()
    document.getElementById('music1').play();
})

play2.addEventListener('click',()=>{
    stopPlay()
    document.getElementById('music2').play();
})

play3.addEventListener('click',()=>{
    stopPlay()
    document.getElementById('music3').play();
})

play4.addEventListener('click',()=>{
    stopPlay()
    document.getElementById('music4').play();
})

play5.addEventListener('click',()=>{
    stopPlay()
    document.getElementById('music5').play();
})

play6.addEventListener('click',()=>{
    stopPlay()
    document.getElementById('music6').play();
})

function stopPlay(){
    stopAudio=document.querySelectorAll('audio');
    stopAudio.forEach(play => {
        play.pause();
        play.runTime=0;
    });
}
