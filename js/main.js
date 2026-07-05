// ============================================
// CUSTOM CURSOR
// ============================================
const halo = document.getElementById('cursorHalo');
const dot  = document.getElementById('cursorDot');
let hx = window.innerWidth/2, hy = window.innerHeight/2;
let mx = hx, my = hy;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

function animateHalo() {
  hx += (mx - hx) * 0.12;
  hy += (my - hy) * 0.12;
  halo.style.left = hx + 'px';
  halo.style.top  = hy + 'px';
  requestAnimationFrame(animateHalo);
}
animateHalo();

// ============================================
// TYPING ANIMATION
// ============================================
const typingEl = document.getElementById('typingEl');
const phrases  = ['Frontend Developer', 'UI Enthusiast', 'Web Creator'];
let pIdx = 0;

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function typingLoop() {
  while (true) {
    const phrase = phrases[pIdx % phrases.length];
    typingEl.textContent = '';
    for (let i = 0; i < phrase.length; i++) {
      typingEl.textContent += phrase[i];
      await sleep(100);
    }
    await sleep(1800);
    while (typingEl.textContent.length > 0) {
      typingEl.textContent = typingEl.textContent.slice(0, -1);
      await sleep(50);
    }
    await sleep(400);
    pIdx++;
  }
}
typingLoop();

// ============================================
// SCROLL REVEAL
// ============================================
const reveals = document.querySelectorAll('.reveal');
const revObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(el => revObserver.observe(el));