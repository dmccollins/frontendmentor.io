function logViewportSize() {
  const W = window.innerWidth || document.documentElement.clientWidth;
  const H = window.innerHeight || document.documentElement.clientHeight;
  console.log(`w: ${W}, h: ${H}`);
}

window.addEventListener('resize', logViewportSize);