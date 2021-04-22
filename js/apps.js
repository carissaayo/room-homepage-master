// let slide = [
//     {
//     id:1,
//     img: "images/desktop-image-hero-1.jpg",
//     header:'Discover innovative ways to decorate',
//     text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love',

// },
// {
//      id: 2,
//      img: "images/desktop-image-hero-2.jpg",
//     header: 'We are available all across the globe',
//     text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today.`,

//     },
//     {
//         id: 3,
//         img: "images/desktop-image-hero-3.jpg",
//         header: 'Manufactured with the best materials',
//         text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,

//     }
// ];
// // the harmburger menu
// const openNav= document.getElementById('open-nav');
// // nthe nav container 
// let nav = document.querySelector('.hide-nav');
// // the close nav menu 
// let closeNav =document.getElementById('close-nav');
// // the harmburger and the logo con
// let hideHarmburger = document.getElementById('hide-harmburger-logo');
// // change the hero image
// let prevHero = document.getElementById('change-left');
// let nextHero = document.getElementById('change-right');
// // the hero image
// let heroImg = document.getElementById('hero-img');
// // the slider h1
// let header = document.getElementById('header');
// // the slider p tag
// let text = document.getElementById('text');

// // for accessing the slide array
// let currentItem = 0;

// // to go back to the previoushero image
// prevHero.addEventListener('click',(item)=>{
//     currentItem--;
//     changeCurrentNumber();
//     changeBg()
// })
// // 
// // to go back to the next hero image
// nextHero.addEventListener('click',item=>{
//     currentItem++;
//     changeCurrentNumber()
//     changeBg()
// })
// function changeCurrentNumber(){
//     // when the currentItem is greater than the last item index
//     if (currentItem > slide.length - 1) { currentItem = 0 };
//     // when the item is at 0 and needs to go to the last item
//     if (currentItem <0){
//         // makes the next item to be the last item
//         currentItem = slide.length-1;
//     }
// }
// function changeBg(){
//      let item = slide[currentItem];
//      heroImg.src = item.img;
//      header.textContent = item.header;
//      text.textContent = item.text;
// }

// // Navbar Events 
// openNav.addEventListener('click',(e)=>{
//     openNavBar()
// })

// closeNav.addEventListener('click',()=>{
//    closeNavBar()
// })

// // NavBar funtions
// function openNavBar(){
//     nav.classList.toggle('hide-nav');
//     hideHarmburger.classList.toggle('hide-logo');
// }
// function closeNavBar(){
//     nav.classList.toggle('hide-nav');
//     hideHarmburger.classList.toggle('hide-logo');
// }