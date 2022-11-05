const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// for loading
// window.onload = function () {
//     setInterval(() => {
//         document.querySelector('.overlay').style.display = 'none';
//         document.querySelector('.loading-spinner').style.display = 'none';
//     }, 500);
// };

// hamburger section
hamburger.addEventListener('click', function () {
    sidebar.classList.add('sidebar-active');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-active');
    this.style.display = 'none';
});

const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const personalProject = document.querySelector('#personal-project');

window.onscroll = function () {
    if (
        Math.round(window.pageYOffset) > about.offsetTop &&
        Math.round(window.pageYOffset) < skills.offsetTop
    ) {
        hamburger.style.color = 'white';
    } else if (Math.round(window.pageYOffset) > personalProject.offsetTop) {
        hamburger.style.color = 'white';
    } else {
        hamburger.style.color = 'black';
    }
};

// typed js section
const options = {
    strings: ['Back-end Web Developer'],
    typeSpeed: 77,
    showCursor: false,
    backSpeed: 50,
};

new Typed('#role', options);

// aos section
AOS.init();

// wow section
new WOW().init({
    mobile: true,
});

// contact button section
const contactButton = document.querySelectorAll('.contact-button');

contactButton.forEach((button) => {
    button.addEventListener('click', function () {
        window.location.href = `mailto: gufronnakaaw@gmail.com`;
    });
});
