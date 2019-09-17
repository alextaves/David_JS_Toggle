const navToggleEl = document.querySelector("#js-navbar-toggle");
const mainMenuEl = document.querySelector(".navbar");
const mainContentEl = document.querySelector(".main-content")


function toggleNav(){
    navToggleEl.addEventListener("click", function(){
        mainMenuEl.classList.toggle("navOpen")
        mainContentEl.classList.toggle("mainExit")
    })
}

toggleNav();

