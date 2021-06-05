
const images = document.getElementById('slideshow').querySelectorAll('img')
let i= 0


function change_img(){
    if(i == 0){
        images[i].style.display = 'inline-block';
    }
    else if(i == images.length){
        images[i-1].style.display = 'none';
        images[0].style.display = 'inline-block';
        i = 0;
    }
    else{
        images[i-1].style.display = 'none';
        images[i].style.display = 'inline-block';
    }
    i++;

}


let timer = setInterval(() => {
change_img()}, 2000);
function stop(){
    clearInterval(timer)
}