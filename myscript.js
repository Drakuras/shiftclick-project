const images = document.getElementById('slideshow').querySelectorAll('img')
let i= 0
function changeImg(){
    if(i == 0){
        console.log(`image ${i}`)
        images[i].style.display = 'inline-block';
    }
    else if(i == images.length){
 
        images[i-1].style.display = 'none';
        images[0].style.display = 'inline-block';
        i = 0;
    }
    else{
        console.log(`image ${i}`)
        images[i-1].style.display = 'none';
        images[i].style.display = 'inline-block';
    }
    i++;

}


setInterval('changeImg()', 1000);

window.onload = changeImg()

