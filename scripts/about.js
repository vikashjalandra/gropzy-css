let choose1 = document.querySelector("#choose1")
let choose2 = document.querySelector("#choose2")
let choose3 = document.querySelector("#choose3")


choose1.addEventListener("click",()=>{
    let chooseCon1 = document.querySelector("#chooseCon1")
    let isActive = choose1.getAttribute("active")

    if (isActive=="true") {
        chooseCon1.setAttribute("class","hidden")
        choose1.setAttribute("active","false")
        choose1.setAttribute("class","fa-solid fa-angle-down")
        document.querySelector("#chooseParent1").setAttribute("class","hover:border hover:text-green-custom border-green-custom p-3 rounded-lg w-10 h-10 flex justify-center items-center")
    } else if (isActive=="false") {
        chooseCon1.setAttribute("class","block")
        choose1.setAttribute("active","true")
        choose1.setAttribute("class","fa-solid fa-angle-up")
        document.querySelector("#chooseParent1").setAttribute("class","hover:border hover:text-green-custom border-green-custom text-green-custom bg-green-customLight p-3 rounded-lg w-10 h-10 flex justify-center items-center")
        
    }
})

choose2.addEventListener("click",()=>{
    
    let chooseCon2 = document.querySelector("#chooseCon2")
    let isActive = choose2.getAttribute("active")

    if (isActive=="true") {
        chooseCon2.setAttribute("class","hidden")
        choose2.setAttribute("active","false")
        choose2.setAttribute("class","fa-solid fa-angle-down")
        document.querySelector("#chooseParent2").setAttribute("class","hover:border hover:text-green-custom border-green-custom p-3 rounded-lg w-10 h-10 flex justify-center items-center")
    } else if (isActive=="false") {
        chooseCon2.setAttribute("class","block")
        choose2.setAttribute("active","true")
        choose2.setAttribute("class","fa-solid fa-angle-up")
        document.querySelector("#chooseParent2").setAttribute("class","hover:border hover:text-green-custom border-green-custom text-green-custom bg-green-customLight p-3 rounded-lg w-10 h-10 flex justify-center items-center")
        
    }
})

choose3.addEventListener("click",()=>{
    
    let chooseCon3 = document.querySelector("#chooseCon3")
    let isActive = choose3.getAttribute("active")

    if (isActive=="true") {
        chooseCon3.setAttribute("class","hidden")
        choose3.setAttribute("active","false")
        choose3.setAttribute("class","fa-solid fa-angle-down")
        document.querySelector("#chooseParent3").setAttribute("class","hover:border hover:text-green-custom border-green-custom p-3 rounded-lg w-10 h-10 flex justify-center items-center")
    } else if (isActive=="false") {
        chooseCon3.setAttribute("class","block")
        choose3.setAttribute("active","true")
        choose3.setAttribute("class","fa-solid fa-angle-up")
        document.querySelector("#chooseParent3").setAttribute("class","hover:border hover:text-green-custom border-green-custom text-green-custom bg-green-customLight p-3 rounded-lg w-10 h-10 flex justify-center items-center")
        
    }
})

let toggleSpan1 = document.querySelector("#toggleSpan1")
let toggleSpan2 = document.querySelector("#toggleSpan2")
let toggleSpan3 = document.querySelector("#toggleSpan3")
let toggleSpan4 = document.querySelector("#toggleSpan4")



toggleSpan1.addEventListener("click",()=>{
    let gropzyWorksHeading1 = document.querySelector("#gropzyWorksHeading1")
    let isActive = gropzyWorksHeading1.getAttribute("active")
    
    if (isActive=="true") {
        gropzyWorksHeading1.setAttribute("active","false")
        gropzyWorksHeading1.setAttribute("class","flex justify-between text-black")
        toggleSpan1.setAttribute("class","rounded-md h-10 w-10 flex justify-center  align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon1").setAttribute("class", "fa-solid fa-angle-down")
        document.querySelector("#gropzyWorks1").style ="display:none;"
        document.querySelector("#act1").removeAttribute("class")
    } else{
        
        gropzyWorksHeading1.setAttribute("active","true")
        gropzyWorksHeading1.setAttribute("class","flex justify-between text-green-custom")
        toggleSpan1.setAttribute("class","bg-green-customLight text-green-custom rounded-md h-10 w-10 flex justify-center align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon1").setAttribute("class", "fa-solid fa-angle-up")
        document.querySelector("#gropzyWorks1").style ="display:block;"
        document.querySelector("#act1").setAttribute("class","act")
    }
})

toggleSpan2.addEventListener("click",()=>{
    
    let gropzyWorksHeading2 = document.querySelector("#gropzyWorksHeading2")
    let isActive = gropzyWorksHeading2.getAttribute("active")
    
    if (isActive=="true") {
        gropzyWorksHeading2.setAttribute("active","false")
        gropzyWorksHeading2.setAttribute("class","flex justify-between text-black")
        toggleSpan2.setAttribute("class","rounded-md h-10 w-10 flex justify-center  align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon2").setAttribute("class", "fa-solid fa-angle-down")
        document.querySelector("#gropzyWorks2").style ="display:none;"
        document.querySelector("#act2").removeAttribute("class")
    } else{
        
        gropzyWorksHeading2.setAttribute("active","true")
        gropzyWorksHeading2.setAttribute("class","flex justify-between text-green-custom")
        toggleSpan2.setAttribute("class","bg-green-customLight text-green-custom rounded-md h-10 w-10 flex justify-center align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon2").setAttribute("class", "fa-solid fa-angle-up")
        document.querySelector("#gropzyWorks2").style ="display:block;"
        document.querySelector("#act2").setAttribute("class","act")
    }
})

toggleSpan3.addEventListener("click",()=>{
    
    let gropzyWorksHeading3 = document.querySelector("#gropzyWorksHeading3")
    let isActive = gropzyWorksHeading3.getAttribute("active")
    
    if (isActive=="true") {
        gropzyWorksHeading3.setAttribute("active","false")
        gropzyWorksHeading3.setAttribute("class","flex justify-between text-black")
        toggleSpan3.setAttribute("class","rounded-md h-10 w-10 flex justify-center  align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon3").setAttribute("class", "fa-solid fa-angle-down")
        document.querySelector("#gropzyWorks3").style ="display:none;"
        document.querySelector("#act3").removeAttribute("class")
    } else{
        
        gropzyWorksHeading3.setAttribute("active","true")
        gropzyWorksHeading3.setAttribute("class","flex justify-between text-green-custom")
        toggleSpan3.setAttribute("class","bg-green-customLight text-green-custom rounded-md h-10 w-10 flex justify-center align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon3").setAttribute("class", "fa-solid fa-angle-up")
        document.querySelector("#gropzyWorks3").style ="display:block;"
        document.querySelector("#act3").setAttribute("class","act")
    }
})
toggleSpan4.addEventListener("click",()=>{
    
    let gropzyWorksHeading4 = document.querySelector("#gropzyWorksHeading4")
    let isActive = gropzyWorksHeading4.getAttribute("active")
    
    if (isActive=="true") {
        gropzyWorksHeading4.setAttribute("active","false")
        gropzyWorksHeading4.setAttribute("class","flex justify-between text-black")
        toggleSpan4.setAttribute("class","rounded-md h-10 w-10 flex justify-center  align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon4").setAttribute("class", "fa-solid fa-angle-down")
        document.querySelector("#gropzyWorks4").style ="display:none;"
        document.querySelector("#act4").removeAttribute("class")
    } else{
        
        gropzyWorksHeading4.setAttribute("active","true")
        gropzyWorksHeading4.setAttribute("class","flex justify-between text-green-custom")
        toggleSpan4.setAttribute("class","bg-green-customLight text-green-custom rounded-md h-10 w-10 flex justify-center align-middle p-3  hover:text-green-custom hover:border border-green-custom")
        document.querySelector("#gropzyWorksIcon4").setAttribute("class", "fa-solid fa-angle-up")
        document.querySelector("#gropzyWorks4").style ="display:block;"
        document.querySelector("#act4").setAttribute("class","act")
    }
})