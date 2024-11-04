
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

const balcony = document.querySelector('#balcony')
const terrace = document.querySelector('#terrace')
const farmland = document.querySelector('#farmland')
const mainContent1 = document.querySelector('#mainContent1')
const mainContent2 = document.querySelector('#mainContent2')
const mainContent3 = document.querySelector('#mainContent3')

balcony.addEventListener('click',()=>{
    mainContent1.classList.remove('hidden')
    mainContent2.classList.add('hidden')
    mainContent3.classList.add('hidden')

    balcony.classList.add('active')
    terrace.classList.remove('active')
    farmland.classList.remove('active')
})

terrace.addEventListener('click',()=>{
    mainContent1.classList.add('hidden')
    mainContent2.classList.remove('hidden')
    mainContent3.classList.add('hidden')

    balcony.classList.remove('active')
    terrace.classList.add('active')
    farmland.classList.remove('active')
})

farmland.addEventListener('click',()=>{
    mainContent1.classList.add('hidden')
    mainContent2.classList.add('hidden')
    mainContent3.classList.remove('hidden')

    balcony.classList.remove('active')
    terrace.classList.remove('active')
    farmland.classList.add('active')
})


const act = document.querySelectorAll(".act")

act.forEach((item)=>{
    const heading = item.querySelector('.heading')
    const content = item.querySelector('.content')
    const icon = item.querySelector('.icon')
    const actChild = item.querySelector('.actChild')
    const howImg = document.querySelector('.howImg')
    
    icon.addEventListener('click',()=>{
        const activeHeading = document.querySelector('.heading.active')
        const activeChild = document.querySelector('.actChild.active')

        if (activeHeading && activeHeading!==heading) {
            activeHeading.classList.remove('active');
            activeChild.classList.remove('active');
            activeHeading.nextElementSibling.classList.add('hidden')
            activeHeading.querySelector('.icon').classList.remove('active')
        }

        // if (item.classList==['act']) {
        //     console.log(hello);
            
        //     // item.classList.remove('active')
        // } 
        icon.classList.toggle('active')
        actChild.classList.toggle('active')
        heading.classList.toggle('active')
        content.classList.toggle('hidden')

        if (heading.classList.contains('active')) {
            const imgUrl = heading.getAttribute('imgSrc')
            howImg.src = imgUrl
        }
    })
})


