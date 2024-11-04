
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