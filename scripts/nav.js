let menuBtn = document.querySelector("#menuBtn")
menuBtn.addEventListener("click", ()=>{
    let isMenuOpen = menuBtn.getAttribute("menuOpen")
    let menuItems = document.querySelector("#menuItems")

    if (isMenuOpen=="true") {
        menuBtn.setAttribute("class", "fa-solid fa-bars")
        menuBtn.setAttribute("menuOpen", "false")
        menuItems.setAttribute("class", "hidden lg:flex items-center gap-3 justify-between w-full")
    } else if (isMenuOpen=="false") {
        
        menuBtn.setAttribute("menuOpen", "true")
        menuItems.setAttribute("class", "flex lg:flex-row flex-col items-center gap-3 justify-between w-full")
        menuBtn.setAttribute("class", "fa-solid fa-x")
    }
})

