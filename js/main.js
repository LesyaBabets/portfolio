const btnDarkMode = document.querySelector('.dark-mode-btn');

if (window.matchMedia && window.matchMedia('(prefers-color-sheme:  dark)').matches ) {
    btnDarkMode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
} 

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
}  else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark')
}

window.matchMedia('(prefers-color-sheme:  dark)').addEventListener('change', () => {
    const newColorSheme = Event.matches ? 'dark' : 'light'

    if (newColorSheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn__active')
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove('dark-mode-btn__active')
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')
    }
})

btnDarkMode.onclick = function () {
    
    btnDarkMode.classList.toggle('dark-mode-btn__active')
    const isNight = document.body.classList.toggle('dark')

    if (isNight) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}