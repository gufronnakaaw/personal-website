const btnDownload = document.querySelector('.download-resume');

window.onload = function() {
    setInterval(() => {
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.loading-spinner').style.display = "none";
    }, 500);
}

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


const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
    (window.pageYOffset >= sticky) ? navbar.classList.add("navbar-fixed") : navbar.classList.remove("navbar-fixed")
});