let body = document.querySelector('body');
let container = document.querySelector('div');



let line1 = document.createElement('hr');
let line2 = document.createElement('hr');
let line3 = document.createElement('hr');
let line4 = document.createElement('hr');




line1.style.visibility='visible';
line1.style.height='0.2rem';
line1.style.position='absolute';
line1.style.width='3.5rem';
line1.style.top='7.2rem';
line1.style.backgroundColor='orange';
line1.style.border = '0.03rem solid orange';
line1.style.left='72.7rem';

line1.style.visibility='visible';
line2.style.visibility='hidden';
line3.style.visibility='hidden';
line4.style.visibility='hidden';

let anchor2 = document.querySelector('.anchor2');
let anchor3 = document.querySelector('.anchor3');
let anchor4 = document.querySelector('.anchor4');

setTimeout(() => {
    anchor2.addEventListener('mouseover',()=>{
        line2.style.visibility='visible';
        line2.style.height='0.2rem';
        line2.style.position='absolute';
        line2.style.width='3.5rem';
        line2.style.top='7.2rem';
        line2.style.backgroundColor='orange';
        line2.style.border = '0.03rem solid orange';
        line2.style.left='77.5rem';
    }); 
}, 2000);



var sliderImages = document.querySelectorAll('.slider img');

var i = 0;
function slider(){
    for(var j = 0;j<sliderImages.length;j++){
        sliderImages[j].style.opacity = 0;
    }

    sliderImages[i].style.opacity=1;

    if(i <sliderImages.length - 1){
        i++;
    }
    else{
        i = 0;
    }
}

setInterval(slider,2000);


anchor2.addEventListener('mouseout',()=>{
    line2.style.width='0rem';
    line2.style.height='0rem';
})

anchor3.addEventListener('mouseover',()=>{
    line3.style.visibility='visible';
    line3.style.height='0.2rem';
    line3.style.position='absolute';
    line3.style.width='3.5rem';
    line3.style.top='7.2rem';
    line3.style.backgroundColor='orange';
    line3.style.border = '0.03rem solid orange';
    line3.style.left='83rem';
})

anchor3.addEventListener('mouseout',()=>{
    line3.style.width='0rem';
    line3.style.height='0rem';
})

anchor4.addEventListener('mouseover',()=>{
    line4.style.visibility='visible';
    line4.style.height='0.2rem';
    line4.style.position='absolute';
    line4.style.width='3.5rem';
    line4.style.top='7.2rem';
    line4.style.backgroundColor='orange';
    line4.style.border = '0.03rem solid orange';
    line4.style.left='88.7rem';
})

anchor4.addEventListener('mouseout',()=>{
    line4.style.width='0rem';
    line4.style.height='0rem';
})



let i = 0;
let image = [];
let time = 3000;

image[0]='food_image.jpg';
image[1]='img5.jpg';
image[2]='img6.jpg';
image[3]='img4.jpg';

function changeImg(){
    document.slide.src = image[i];
    if(i<image.length - 1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);
}

window.onload=changeImg;



container.append(line1);
container.append(line2);
container.append(line3);
container.append(line4);
