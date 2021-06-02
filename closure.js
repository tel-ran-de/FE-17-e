// function main() {
//     //////
//     let b = 2
//     console.log( a );
//     draw()
//     console.log('I am finished');

//     function draw() {
//         /////
//         calc()
//         ///
//         return 'Drawed'
//     }

//     draw()
// }



// function calc() {
//     return 1+1
// }

// const a = 1

// main()

function counter() {
    let count = 0
    return function() {
        // let count = 0
        return ++count
    }
}

let c1 = counter()
let c2 = counter()
console.log( counter() );

console.log( c1() );
console.log( c1() );
console.log( c1() );
console.log( c2() );

