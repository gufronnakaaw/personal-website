const btnDownload = document.querySelector('.download-resume');

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