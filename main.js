'use strict';


// Make navbar transparents when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the nav menu. 
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
    const target = event.target
    const link = target.dataset.link
    if (link == null) {
        return;
        console.log(link);
    };
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});

// Contact
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', () => {
    const target = event.target
    const link = target.dataset.link
    if (link != null) {
        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({ behavior: 'smooth' });
    };
});