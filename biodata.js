function updateClock() {
    const now = new Date();

    // Mendapatkan tanggal (dd-mm-yyyy)
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Januari = 0
    const year = now.getFullYear();
    const currentDate = `${day}-${month}-${year}`;

    // Mendapatkan waktu (hh:mm:ss)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Menampilkan jam dan tanggal di elemen HTML
    document.getElementById('date').textContent = currentDate;
    document.getElementById('time').textContent = currentTime;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Menjalankan fungsi pertama kali saat halaman dimuat
updateClock();

const slideContainer = document.querySelector('.slide');

// Toggle play and pause state on click
slideContainer.addEventListener('click', function () {
    const isPaused = getComputedStyle(slideContainer).animationPlayState === 'paused';
    slideContainer.style.animationPlayState = isPaused ? 'running' : 'paused';
});