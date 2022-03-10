const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// window.onload = function() {
//     // setInterval(() => {
//     // }, 500);
//     document.querySelector('.overlay').style.display = "none";
//     document.querySelector('.loading-spinner').style.display = "none";
// }

// hamburger section
hamburger.addEventListener('click', function () {
    sidebar.classList.add('sidebar-active');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-active');
    this.style.display = 'none';
});


const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const personalProject = document.querySelector('#personal-project')

window.onscroll = function () {

    if (Math.round(window.pageYOffset) > about.offsetTop && Math.round(window.pageYOffset) < skills.offsetTop) {
        hamburger.style.color = "white"
    } else if (Math.round(window.pageYOffset) > personalProject.offsetTop) {
        hamburger.style.color = "white"
    } else {
        hamburger.style.color = "black"
    }
}


// typed js section
const options = {
    strings: ['Back-end Web Developer'],
    typeSpeed: 75,
    showCursor: false,
    backSpeed: 50
};

new Typed('#role', options);

// aos section
AOS.init();

// wow section
new WOW().init({
    mobile: true,
});