// For Log in Page
const passFieldLogin = document.querySelector('.psw')
const showLogin = document.querySelector('.showLogin')
const hideLogin = document.querySelector('.hideLogin')

showLogin.onclick = function () {
    passFieldLogin.setAttribute('type', 'text')
    showLogin.style.display = 'none'
    hideLogin.style.display = 'block'
}

hideLogin.onclick = function () {
    passFieldLogin.setAttribute('type', 'password')
    hideLogin.style.display = 'none'
    showLogin.style.display = 'block'
}

// for Sig in Page
const passField = document.querySelector('.psw-field')
const show = document.querySelector('.showPsw')
const hide = document.querySelector('.hidePsw')

const passFieldConf = document.querySelector('.psw-field-conf')
const showConf = document.querySelector('.showConf')
const hideConf = document.querySelector('.hideConf')

show.onclick = function () {
    passField.setAttribute('type', 'text')
    show.style.display = 'none'
    hide.style.display = 'block'
}

hide.onclick = function () {
    passField.setAttribute('type', 'password')
    hide.style.display = 'none'
    show.style.display = 'block'
}

showConf.onclick = function () {
    passFieldConf.setAttribute('type', 'text')
    showConf.style.display = 'none'
    hideConf.style.display = 'block'
}

hideConf.onclick = function () {
    passFieldConf.setAttribute('type', 'password')
    hideConf.style.display = 'none'
    showConf.style.display = 'block'
}