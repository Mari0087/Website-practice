const search1_box=document.getElementById('search1')
const search_box=document.getElementById('search')
let count='True'
function input_box(){
    if(count=='True'){
        search_box.style.width='200px'
        count='false'
        search1_box.style.display='grid'

    }else if(count=='false'){
        search_box.style.width='0px'
        count='True'
        search1_box.style.display='none'
    }

}

