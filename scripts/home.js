const choose = document.querySelectorAll('.choose')

choose.forEach((item)=>{
    const chooseHeading = item.querySelector('.chooseHeading')
    const chooseDetails = item.querySelector('.chooseDetails')
    const icon =item.querySelector('.icon')

    icon.addEventListener("click",()=>{
        const activeHeading = document.querySelector('.chooseHeading.active')

        if (activeHeading && activeHeading!==chooseHeading) {
            activeHeading.classList.remove('active');
            activeHeading.nextElementSibling.classList.add('hidden')
            activeHeading.querySelector('.icon').classList.remove('active')
        }

        icon.classList.toggle('active')
        chooseHeading.classList.toggle('active')
        chooseDetails.classList.toggle('hidden')
    })
})





let slideIndex = 1;
let numSlide= document.querySelector("#numSlide")
showSlides(slideIndex)

function plusSlider(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides")
    let dots = document.querySelectorAll(".dot")

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    numSlide.innerHTML = `${slideIndex}/3`
    

    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none"

    }



    slides[slideIndex-1].style.display = "flex"
}



let slider = document.querySelector("#slider")
let leftBtn = document.querySelector("#leftBtn")
let rightBtn = document.querySelector("#rightBtn")
let scrollAmount = 500
let numb = document.querySelector('.numb')
let num =1

leftBtn.addEventListener("click",()=>{
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });

      if (num!==0 &&num>1) {
        num--;
      }
      numb.innerHTML=`${num}/4`
      
})

rightBtn.addEventListener("click",()=>{
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      
      if (num!==4 &&num<4) {
        num++;
      }
      numb.innerHTML=`${num}/4`
})

const outdoor = document.querySelector('#outdoorBtn')
const indoor = document.querySelector('#indoorBtn')
const stackDiv1 = document.querySelector('#stackDiv1')
const stackDiv2 = document.querySelector('#stackDiv2')
const scrollIt1 = document.querySelector('#scrollIt1')
const scrollIt2 = document.querySelector('#scrollIt2')
console.log(stackDiv1);


outdoor.addEventListener("click",()=>{
    stackDiv1.style.display = 'flex'
    stackDiv2.style.display = 'none'
    outdoor.classList.add('active')
    indoor.classList.remove('active')
    scrollIt2.style.display = 'none'
    scrollIt1.style.display = 'flex'
})

indoor.addEventListener("click",()=>{
    stackDiv2.style.display = 'flex'
    stackDiv1.style.display = 'none'
    indoor.classList.add('active')
    outdoor.classList.remove('active')
    scrollIt1.style.display = 'none'
    scrollIt2.style.display = 'flex'
})




let i=1;
function scrlRight(){
    const stackDiv1 = document.querySelector('#stackDiv1')
    const stackWidth=stackDiv1.getBoundingClientRect().width;
    const scrlNum1 = document.querySelector('#scrlNum1')
    if (i<4) {
        i++;
    }
    scrlNum1.innerHTML=`${i}/4`
    stackDiv1.scrollBy({ left: stackWidth, behavior: 'smooth' });
}

function scrlLeft(){
    const stackDiv1 = document.querySelector('#stackDiv1')
    const stackWidth=stackDiv1.getBoundingClientRect().width;
    const scrlNum1 = document.querySelector('#scrlNum1')
    if (i>1){
        i--;
    }
    scrlNum1.innerHTML=`${i}/4`
    stackDiv1.scrollBy({ left: -stackWidth, behavior: 'smooth' });
}

function scrlRight1(){
    const stackDiv2 = document.querySelector('#stackDiv2')
    const stackWidth=stackDiv2.getBoundingClientRect().width;
    stackDiv1.scrollBy({ left: stackWidth, behavior: 'smooth' });
}

function scrlLeft1(){
    const stackDiv2 = document.querySelector('#stackDiv2')
    const stackWidth=stackDiv1.getBoundingClientRect().width;
    stackDiv1.scrollBy({ left: -stackWidth, behavior: 'smooth' });
}