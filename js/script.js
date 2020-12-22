const btnDownload = document.querySelector('.download-resume');

window.onload = function() {
    document.querySelector('.overlay').style.display = "none";
    document.querySelector('.loading-spinner').style.display = "none";
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