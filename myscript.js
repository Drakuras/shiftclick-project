const images = document.getElementById('slideshow').getElementsByTagName('img')
const button = document.getElementById('slideshow').getElementsByTagName('button')
let i = 0
let time = 2000
//on and off function for the carousel/slideshow
function stopLooper(){
    if (button[1].innerHTML == 'ON'){
        clearInterval(loop);
        button[1].innerHTML = 'OFF'
    }
    else{
        loop = setInterval('next()', time);
        button[1].innerHTML = 'ON'
    } 
}
//next button funtion
function next(){
    
    if (i > images.length-1){
        i = 0
        images[images.length-1].style.display = 'none'
        images[0].style.display = 'inline-block'
    }
    else{
        if (i-1 > -1){
            images[i-1].style.display = 'none'
            images[i].style.display = 'inline-block'  
        }
        else{
            images[i].style.display = 'inline-block'
        }
    }
    console.log(i)
    clearInterval(loop)
    loop = setInterval('next()', time);
    i++  
}
function previous(){
    clearInterval(loop);
    if (i == -1){
        i = images.length-1
        images[0].style.display = 'none'
        images[images.length-1].style.display = 'inline-block'
        
    }
    else{
        if (i == images.length-1){
            images[0].style.display = 'none'
            images[i-1].style.display = 'inline-block'
        }
        else{
            images[i].style.display = 'none'
            images[i-1].style.display = 'inline-block'
        }
    }
    console.log(i)
    i--;
}

images[0].style.display = 'inline-block'
let loop = setInterval('next()', time);
