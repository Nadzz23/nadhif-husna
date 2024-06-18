document.addEventListener("DOMContentLoaded", function () {
  const parallaxSections = document.querySelectorAll(".parallax");

  // Fungsi untuk menghitung waktu yang telah berlalu
  function updateElapsedTime() {
    const startDate = new Date("2018-11-17T00:00:00");
    const now = new Date();
    const elapsedTime = now - startDate;

    const elapsedDate = new Date(elapsedTime);
    const years = elapsedDate.getUTCFullYear() - 1970; // Mulai dari tahun 1970
    const months = elapsedDate.getUTCMonth();
    const days = elapsedDate.getUTCDate() - 1; // Hari mulai dari 1
    const hours = elapsedDate.getUTCHours();
    const minutes = elapsedDate.getUTCMinutes();
    const seconds = elapsedDate.getUTCSeconds();

    document.getElementById(
      "elapsed-time"
    ).textContent = `${years} tahun, ${months} bulan, ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
  }

  // Perbarui waktu setiap detik
  setInterval(updateElapsedTime, 1000);

  // Parallax effect
  window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;
    parallaxSections.forEach((section) => {
      let speed = section.dataset.speed
        ? parseFloat(section.dataset.speed)
        : 0.5;
      let offset = scrollPosition * speed;
      section.style.backgroundPositionY = `calc(100% + ${offset}px)`;
    });
  });
});
