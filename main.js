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
    };
    navbarMenu.classList.remove('open');
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
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

// Transparent home
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight
});

// Show Arrow up button when scrolling down 
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight / 2 ){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Go UP 
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
    
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}

// Project 

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=> {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null){
        return;
    }

    // Remove selection from the previoius item and select the new one. 
    const active = document.querySelector('.category__btn.selected')
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target :
                        e.target.parentNode;
    e.target.classList.add('selected');
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === "*" ||  filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300);
});