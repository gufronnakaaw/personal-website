const btnDownload = document.querySelector('.download-resume');
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// window.onload = function() {
//     // setInterval(() => {
//     // }, 500);
//     document.querySelector('.overlay').style.display = "none";
//     document.querySelector('.loading-spinner').style.display = "none";
// }

btnDownload.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Available Soon!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    });
});


hamburger.addEventListener('click', function(){
    sidebar.classList.add('sidebar-active');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function(){
    sidebar.classList.remove('sidebar-active');
    this.style.display = 'none';
});


const about = document.querySelector('#about')
const skills = document.querySelector('#skills')
const personalProject = document.querySelector('#personal-project')

window.onscroll = function() {

    if(Math.round(window.pageYOffset) > about.offsetTop && Math.round(window.pageYOffset) < skills.offsetTop){
        hamburger.style.color = "white"
    } else if(Math.round(window.pageYOffset) > personalProject.offsetTop){
        hamburger.style.color = "white"
    } else {
        hamburger.style.color = "black"
    }
}