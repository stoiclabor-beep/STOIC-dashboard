(function () {
  window.addEventListener('load', () => {
    
    const languages = [
      "思想家", "мыслитель", "cogitator", "στοχαστής", "思想家", 
      "مفكر", "विचारक", "Denker", "ꦥꦩꦶꦏꦶꦂ", "사상가", "tänkare", 
      "myśleciel", "düşünür", "pensatore", "STOIC"
    ];

    const titleEl = document.getElementById('title-text');
    const subEl = document.getElementById('typewriter-sub');
    const yearEl = document.getElementById('year-text');

    // ==========================================
    // KONFIGURASI WAKTU
    // ==========================================
    const START_DELAY = 1000; // Mulai ganti bahasa setelah 1 detik (logo sudah masuk)
    const TOTAL_ANIM_DURATION = 2300; // Durasi ganti bahasa + ngetik (2.3 detik)
    
    let langIndex = 0;
    let subIndex = 0;
    const subText = "Student Invention & Inquiry\nConsortium";

    // --- 1. ANIMASI GANTI BAHASA (LOOPING) ---
    function loopLanguages() {
      // Cek apakah waktu sudah habis (mendekati 2.3 detik)
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= TOTAL_ANIM_DURATION) {
        // WAKTU HABIS: Kunci di STOIC
        titleEl.textContent = "STOIC";
        
        // Trigger fade in untuk EST 2026
        setTimeout(() => {
          yearEl.style.opacity = 1;
        }, 200);
        
        // Kasih jeda dikit (1 detik) biar user bisa liat hasil akhirnya
        setTimeout(() => {
          const intro = document.getElementById('intro');
          intro.classList.add('hide');
          setTimeout(() => {
            window.location.replace('home.html');
          }, 800); // 800ms buat fade out intro
        }, 1000); 
        
        return; // Hentikan loop
      }

      // Kalau belum habis, tampilkan bahasa & lanjut ke index berikutnya
      titleEl.textContent = languages[langIndex];
      langIndex = (langIndex + 1) % 14; // Modulo 14: Loop 0-13 (STOIC di akhir)
      
      // Interval ganti bahasa: 60ms per kata (ngebut)
      setTimeout(loopLanguages, 60);
    }

    // --- 2. ANIMASI MESIN KETIK ---
    function typeWriter() {
      const elapsed = Date.now() - startTime;

      // Kalau udah mau abis waktunya, langsung lompat ke huruf terakhir
      if (elapsed >= TOTAL_ANIM_DURATION - 100) {
        subEl.innerHTML = subText.replace(/\n/g, '<br>');
        return;
      }

      if (subIndex < subText.length) {
        let currentText = subText.substring(0, subIndex + 1);
        subEl.innerHTML = currentText.replace(/\n/g, '<br>') + '<span class="cursor"></span>';
        subIndex++;
        
        // Ngetik cepet
        setTimeout(typeWriter, 35); 
      }
    }

    // === MULAI SEMUANYA ===
    let startTime;
    setTimeout(() => {
      startTime = Date.now();
      loopLanguages();
      typeWriter();
    }, START_DELAY);

  });
})();