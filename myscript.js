const images = document.getElementById('slideshow').querySelectorAll('img')
let  i = 0;
//function that moves to the next image onclick
function next(){
    if (i==0){
        console.log(`you're on if`)
        images[images.length-1].style.display = 'none';
        images[i].style.display = 'inline-block';
    }
    else if (i > 2){
        console.log(`you're on else if`)
        i = 0
        images[images.length-1].style.display = 'none';
        images[0].style.display = 'inline-block';
        
        
    }
    else if (i < images.length){
        console.log(`you're on else`)
        images[i-1].style.display='none'
        images[i].style.display = 'inline-block'
        
    }
    console.log(i)
    i++
    
}
//function that moves backwards
function previous(){
    if (i == 0){
        i = images.length-1
        console.log(`${images[2]} ${i}`)
        images[0].style.display = 'none'
        images[i].style.display = 'inline-block'
    }
    else if(i < images.length){
        images[i].style.display = 'none'
        images[i-1].style.display = 'inline-block'
    }
    i--;
    
    
}
//using setInterval to run next() every two seconds this allows the carousel to run automatically 
setInterval('next()', 2000);
window.onload = next()
