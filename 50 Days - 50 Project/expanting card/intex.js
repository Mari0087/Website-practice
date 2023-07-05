const first_image = document.getElementById('img-1')
const sec_image = document.getElementById('img-2')
const third_image = document.getElementById('img-3')
const four_image = document.getElementById('img-4')
const five_image = document.getElementById('img-5')


first_image.addEventListener('click', function() {
    first_image.style.width = '55%'
    sec_image.style.width = "8%"
    third_image.style.width = "8%"
    four_image.style.width = "8%"
    five_image.style.width = '8%'
   
})

sec_image.addEventListener('click', function() {
    first_image.style.width = '8%'
    sec_image.style.width = "55%"
    third_image.style.width = "8%"
    four_image.style.width = "8%"
    five_image.style.width = '8%'
   
})

third_image.addEventListener('click', function() {
    first_image.style.width = '8%'
    sec_image.style.width = "8%"
    third_image.style.width = "55%"
    four_image.style.width = "8%"
    five_image.style.width = '8%'
    
})

four_image.addEventListener('click', function() {
    first_image.style.width = '8%'
    sec_image.style.width = "8%"
    third_image.style.width = "8%"
    four_image.style.width = "55%"
    five_image.style.width = '8%'
    
})

five_image.addEventListener('click', function() {
    first_image.style.width = '8%'
    sec_image.style.width = "8%"
    third_image.style.width = "8%"
    four_image.style.width = "8%"
    five_image.style.width = '55%'
})