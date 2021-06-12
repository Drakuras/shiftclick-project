const images = document.getElementById('slideshow').getElementsByTagName('img')
const button = document.getElementById('slideshow').getElementsByTagName('button')
let i = 0
let time = 2000
function imageChanger(){
    if (i == 0){
        images[i].style.display = 'inline-block'
        
    }
    else if (i> images.length-1){
        images[images.length-1].style.display = 'none'
        images[0].style.display = 'inline-block'
        i = 0
    }
    else{
        images[images.length-1].style.display = 'none'
        images[i-1].style.display = 'none'
        images[i].style.display = 'inline-block'
    }
    
    console.log(i)
    i++
}
function next(){
    console.log(time)
    
    setTimeout(imageChanger)

}
function previous(){
    clearInterval(looper)
    if (i ==-1){
        i = images.length-1
        images[0].style.display = 'none'
        images[i].style.display = 'inline-block'
       }
    else if (i < images.length-1){
        images[i+1].style.display = 'none'
        images[i].style.display = 'inline-block'
        
    }
    else if (i == 0){
        images[0].style.display = 'none'
        images[images.length-1].style.display = 'inline-block'

    }
    console.log(i)
    i--;
}
function stopLooper(){
    if (button[1].innerHTML == 'ON'){
        clearInterval(looper);
        button[1].innerHTML = 'OFF'
    }
    else{
        looper
        button[1].innerHTML = 'ON'
    }
    
    
}
let looper = setInterval(imageChanger,time);
