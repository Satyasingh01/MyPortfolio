// Initialize tsParticles background
tsParticles.load("tsparticles", {
  background: { color: { value: "#0d1117" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { quantity: 3 }
    }
  },
  particles: {
    color: { value: "#00e6ff" },
    links: {
      color: "#00e6ff",
      distance: 120,
      enable: true,
      opacity: 0.3,
      width: 1
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false
    },
    number: { value: 70, density: { enable: true, area: 800 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } }
  },
  detectRetina: true
});
