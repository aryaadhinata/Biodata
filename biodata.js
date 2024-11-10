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

function updateElapsedTime() {
    const startDate = new Date("2007-10-31T00:00:00");
    const now = new Date();

    let elapsed = now - startDate; // Waktu yang sudah berlalu dalam milidetik

    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25));
    elapsed -= years * 1000 * 60 * 60 * 24 * 365.25;

    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30.4375));
    elapsed -= months * 1000 * 60 * 60 * 24 * 30.4375;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    elapsed -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    elapsed -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(elapsed / (1000 * 60));
    elapsed -= minutes * 1000 * 60;

    const seconds = Math.floor(elapsed / 1000);

    document.getElementById("old").textContent = 
        `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Perbarui waktu setiap detik
setInterval(updateElapsedTime, 1000);

const slideContainer = document.querySelector('.slide');

// Toggle play and pause state on click
slideContainer.addEventListener('click', function () {
    const isPaused = getComputedStyle(slideContainer).animationPlayState === 'paused';
    slideContainer.style.animationPlayState = isPaused ? 'running' : 'paused';
});