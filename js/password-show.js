const btn = document.querySelector('#psw-btn')
const psw = document.querySelector('#psw')

btn.addEventListener('click', function () {
    if (psw.type === 'text') {
        psw.type = 'password'
        btn.innerHTML = '<i class="icon-eye"></i>'
    } else {
        psw.type = 'text'
        btn.innerHTML = '<i class="icon-eye-slash"></i>'
    }
})
