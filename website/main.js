const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const navHam = document.querySelector('.navHam')
window.addEventListener('scroll', fixNavHam)

function fixNavHam() {
    if(window.scrollY > navHam.offsetHeight + 150) {
        navHam.classList.add('active')
    } else {
        navHam.classList.remove('active')
    }
}