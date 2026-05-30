const canvas = document.querySelector("#constellation");
const context = canvas ? canvas.getContext("2d") : null;

let width = 0;
let height = 0;
let points = [];
let pointer = { x: 0, y: 0, active: false };
let frame = 0;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
  if (!canvas || !context) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.round(Math.min(150, Math.max(70, width / 13)));
  points = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    radius: index % 11 === 0 ? 2.2 : 1,
    pulse: Math.random() * Math.PI * 2,
  }));
}

function draw() {
  if (!canvas || !context) return;
  frame += 1;
  context.clearRect(0, 0, width, height);

  points.forEach((point) => {
    if (!prefersReducedMotion) {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
    }

    point.pulse += 0.018;
    const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
    if (pointer.active && pointerDistance < 180) {
      point.x += (pointer.x - point.x) * 0.002;
      point.y += (pointer.y - point.y) * 0.002;
    }
  });

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const a = points[i];
      const b = points[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const pointerDistance = pointer.active ? Math.hypot(midX - pointer.x, midY - pointer.y) : 9999;
      const reveal = Math.max(0, 1 - pointerDistance / 280);
      const scrollReveal = Math.min(0.18, window.scrollY / 3200);

      if (distance < 140 && (reveal > 0.04 || scrollReveal > 0.02)) {
        const reroute = frame % 420 > 350 && i % 17 === 0 ? 0.14 : 0;
        const alpha = (1 - distance / 140) * (reveal * 0.7 + scrollReveal + reroute);
        context.strokeStyle = `rgba(156, 170, 105, ${alpha})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }
  }

  points.forEach((point) => {
    const pulse = point.radius > 1 ? (Math.sin(point.pulse) + 1) * 0.18 : 0;
    const glow = point.radius > 1 ? 0.54 + pulse : 0.26;
    context.fillStyle = `rgba(228, 227, 225, ${glow})`;
    context.beginPath();
    context.arc(point.x, point.y, point.radius + pulse * 1.8, 0, Math.PI * 2);
    context.fill();
  });

  if (!prefersReducedMotion) requestAnimationFrame(draw);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  pointer = { x: event.clientX, y: event.clientY, active: true };
});
window.addEventListener("pointerleave", () => {
  pointer.active = false;
});
window.addEventListener("scroll", () => {
  const progress = Math.min(1, window.scrollY / Math.max(1, window.innerHeight * 2));
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(3));
});

resizeCanvas();
draw();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    const target = id === "#top" ? document.querySelector("main") : document.querySelector(id);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", id);
  });
});

function scrollToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  target.scrollIntoView({ behavior: "auto", block: "start" });
}

window.addEventListener("load", () => {
  requestAnimationFrame(scrollToHash);
});
window.addEventListener("hashchange", () => {
  requestAnimationFrame(scrollToHash);
});

document.querySelectorAll(".puzzle-system").forEach((system) => {
  const pieces = system.querySelectorAll(".piece");

  pieces.forEach((piece) => {
    piece.addEventListener("click", () => {
      const isActive = piece.classList.contains("is-active");
      pieces.forEach((item) => {
        item.classList.remove("is-active");
        item.style.removeProperty("--drag-x");
        item.style.removeProperty("--drag-y");
      });
      system.classList.toggle("has-active", !isActive);
      if (!isActive) piece.classList.add("is-active");
    });

    piece.addEventListener("pointerdown", (event) => {
      piece.setPointerCapture(event.pointerId);
      piece.classList.add("dragging");
      piece.dataset.startX = event.clientX;
      piece.dataset.startY = event.clientY;
    });

    piece.addEventListener("pointermove", (event) => {
      if (!piece.classList.contains("dragging")) return;
      const dx = event.clientX - Number(piece.dataset.startX || event.clientX);
      const dy = event.clientY - Number(piece.dataset.startY || event.clientY);
      piece.style.translate = `${dx}px ${dy}px`;
    });

    piece.addEventListener("pointerup", () => {
      piece.classList.remove("dragging");
      piece.style.translate = "";
    });
  });
});
