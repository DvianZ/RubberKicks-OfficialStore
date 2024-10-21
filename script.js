// Tunggu hingga dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menangani scrolling halus
    function scrollHalus(target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Tambahkan event listener untuk semua link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                scrollHalus(targetElement);
            }
        });
    });

    // Fungsi untuk animasi fade-in elemen saat di-scroll
    function animasiMunculSaatScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            if (rect.top <= viewHeight * 0.75 && rect.bottom >= 0) {
                el.classList.add('visible');
            }
        });
    }

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', animasiMunculSaatScroll);

    // Panggil fungsi saat halaman dimuat untuk memeriksa elemen yang sudah terlihat
    animasiMunculSaatScroll();

    function bukaPopupSport() {
        window.open('payment-sport.html', 'PopupWindow', 'width=400,height=800');
    }

    const popupButtonSport = document.getElementById('popup-button-sport');
    if (popupButtonSport) {
        popupButtonSport.addEventListener('click', bukaPopupSport);
    }

    function bukaPopupCasual() {
        window.open('payment-casual.html', 'PopupWindow', 'width=400,height=800');
    }

    const popupButtonCasual = document.getElementById('popup-button-casual');
    if (popupButtonCasual) {
        popupButtonCasual.addEventListener('click', bukaPopupCasual);
    }

    function bukaPopupRunning() {
        window.open('payment-running.html', 'PopupWindow', 'width=400,height=800');
    }

    const popupButtonRunning = document.getElementById('popup-button-running');
    if (popupButtonRunning) {
        popupButtonRunning.addEventListener('click', bukaPopupRunning);
    }

    function bukaPopupLifestyle() {
        window.open('payment-lifestyle.html', 'PopupWindow', 'width=400,height=800');
    }

    const popupButtonLifestyle = document.getElementById('popup-button-lifestyle');
    if (popupButtonLifestyle) {
        popupButtonLifestyle.addEventListener('click', bukaPopupLifestyle);
    }
});
