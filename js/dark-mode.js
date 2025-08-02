export function initDarkMode() {
  const toggleSwitch = document.querySelector('#theme-toggle');
  if (!toggleSwitch) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleSwitch.addEventListener('change', () => {
    const theme = toggleSwitch.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  toggleSwitch.checked = currentTheme === 'dark';
}