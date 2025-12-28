const toggleButton = document.getElementById('toggle-theme')
const html = document.documentElement

toggleButton.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    html.setAttribute('data-theme', newTheme)
    toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙'
})
