const form = document.querySelector('#testForm')
const emailSpan = document.querySelector('.alert > span')
const alertBlock = document.querySelector('.alert')

form.addEventListener('submit', event => {
    event.preventDefault()
    emailSpan.textContent = document.querySelector('#email').value
    alertBlock.classList.remove('d-none')
    form.classList.add('d-none')
    document.querySelector('#email').value = ''
    setTimeout( () => {
        alertBlock.classList.add('d-none')
        form.classList.remove('d-none')
    }, 3000 )
})