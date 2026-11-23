document.documentElement.classList.add('js');
try {
  const saved = localStorage.getItem('0xmaro-theme');
  if (saved === 'paper' || saved === 'darkroom') {
    document.documentElement.dataset.theme = saved;
  }
} catch {
  // Storage blocked — keep default darkroom theme.
}
