let slide = {
    img1:"images/desktop-image-hero-1.jpg",
    img2: "images/desktop-image-hero-2.jpg",
    img3: "images/desktop-image-hero-3.jpg",
}

const openNav= document.getElementById('open-nav');
let nav = document.querySelector('.hide-nav');
let closeNav =document.getElementById('close-nav');
// the harmburger and the logo con
let hideHarmburger = document.getElementById('hide-harmburger-logo');























// Navbar Events 
openNav.addEventListener('click',(e)=>{
    openNavBar()
})

closeNav.addEventListener('click',()=>{
   closeNavBar()
})

// NavBar funtions
function openNavBar(){
    nav.classList.toggle('hide-nav');
    hideHarmburger.classList.toggle('hide-logo');
}
function closeNavBar(){
    nav.classList.toggle('hide-nav');
    hideHarmburger.classList.toggle('hide-logo');
}