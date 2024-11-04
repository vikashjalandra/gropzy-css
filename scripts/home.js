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

outdoor.addEventListener("click",()=>{
    stackDiv1.style.display = 'flex'
    stackDiv2.style.display = 'none'
    outdoor.classList.add('active')
    indoor.classList.remove('active')
})

indoor.addEventListener("click",()=>{
    stackDiv2.style.display = 'flex'
    stackDiv1.style.display = 'none'
    indoor.classList.add('active')
    outdoor.classList.remove('active')
})