const images = document.getElementById('slideshow').getElementsByTagName('img')
const button = document.getElementById('slideshow').getElementsByTagName('button')
let i = 0
let next = document.getElementById('next')
let previous = document.getElementById('previous')
next.addEventListener("click",nextFunc)
previous.addEventListener("click",previousFunc)


images[0].style.display = 'inline-block'
function nextFunc(){
    i++ 

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
    clearInterval(loop)
    loop = setInterval('nextFunc()', 2000);
     
}
function previousFunc(){
    if (i == 0){
        i = images.length
        images[0].style.display = 'none'
        images[images.length-1].style.display = 'inline-block'
        i--;
        console.log(i)
    }
    else if (i == images.length-1){
        images[images.length-1].style.display = 'none'
        images[i-1].style.display = 'inline-block'
        i--
    }
    else{
        images[i].style.display = 'none'
        images[images.length-1].style.display = 'none'
        images[i-1].style.display = 'inline-block'
        clearInterval(loop)
        loop = setInterval('previousFunc()', 2000);
        i--
    }
}

let loop = setInterval(nextFunc, 2000);
