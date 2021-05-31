function division ( a,b ) {
    if ( b == 0 ) {
        throw new Error( 'Division by zero!' )
    }
    return a/b
}

document.querySelector('#division').addEventListener('submit', event => {
    event.preventDefault()
    try {
        let result = division( document.querySelector('#a').value, document.querySelector('#b').value )
        document.querySelector('#result > span').textContent = result
        document.querySelector('#result').classList.remove('d-none')
        document.querySelector('.alert').classList.add('d-none')
        sayHello('Vasya')
    } catch (e) {
        document.querySelector('.alert').textContent = e.message
        document.querySelector('.alert').classList.remove('d-none')
        document.querySelector('#result').classList.add('d-none')
    }
})

// try {
//     console.log( division(4,0) );
// } catch (error) {
//     console.log( error.message );
// } finally {
//     console.log( 'Always running' );
// }

// try {
//     sayHello('Vasya')
// } catch (e) {
//     console.log( e.message );
// }

// // sayHello('Vasya')

// console.log( 'hello' );