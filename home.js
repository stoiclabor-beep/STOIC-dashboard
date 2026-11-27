document.addEventListener('DOMContentLoaded', () => {
  const spotlight = document.getElementById('spotlight');
  const heroImage = document.getElementById('heroImage');

  // Fungsi yang dipanggil setiap kali mouse bergerak
  document.addEventListener('mousemove', (e) => {
    // 1. Dapatkan posisi X dan Y dari mouse (dalam pixel)
    const x = e.clientX;
    const y = e.clientY;

    // 2. Update posisi Spotlight (cahaya)
    // Kita set CSS variable --mouse-x dan --mouse-y ke elemen spotlight
    spotlight.style.setProperty('--mouse-x', `${x}px`);
    spotlight.style.setProperty('--mouse-y', `${y}px`);

    // 3. Update Parallax pada Gambar Hero
    // Hitung pergerakan berdasarkan tengah layar
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Semakin jauh mouse dari tengah, semakin besar geserannya
    // Nilai 0.02 dan 0.01 adalah "intensitas" pergeseran (bisa diubah)
    const moveX = (x - centerX) * -0.02; 
    const moveY = (y - centerY) * -0.01;

    heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});