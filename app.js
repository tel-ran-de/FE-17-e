// // rest - Остаточный параметр
// // spread - Разворачивает объект или массив
// // Десктрутуризация - рспаковка массива или объекта по переменным

// // function sum(...rest) {
// //     return rest.reduce((sum, e) => sum+e, 0)
// // }

// // console.log(sum(1,2,3,4,5,6))
// // console.log(sum(10,20,30,4,5,6,100,200))

// // const numers = [1,2,3,4,5]
// // const num2 = [6,7,8,9,0]
// // let [a,b,c, ...abra] = numers
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(abra)

// // let [fName, lName, ...rest] = 'Юлий Цезарь Император Рима'.split(' ')
// // console.log(fName)
// // console.log(lName)
// // console.log(rest)

// // const cN = numers
// // const copyNumers = [...numers]
// // const allNumers = [...numers, ...num2]
// // numers[0] = 100
// // console.log(cN)
// // console.log( copyNumers )
// // console.log(allNumers);

const person = {
    fName: 'Ivan',
    age: 30,
    profession: 'Developer'
}

// const car = {
//     id: 123,
//     model: 'Бумер' 
// }

// const cP = person
// // console.log( cP === person )
// const copyPerson = {...person, ...car}
// console.log( copyPerson == person )

// // person.age = 31

// console.log(copyPerson);

// const {id: passport, fName: VaninoImya} = copyPerson
// console.log( VaninoImya, passport );

// // function Car(id, model) {
// //     this.id = id
// //     this.model = model
// //     this.equals = function(obj) {
// //         return this.id === obj.id && this.model.length > 3 && obj.model.length > 3
// //     }
// // }

// // let c1 = new Car(123, 'Volvo')
// // let c2 = new Car(123, 'BMW')

// // console.log( c1.equals(c2) );


const greating = ({fName, age}) => {
    document.querySelector('h1 > span').innerText = fName
    document.querySelector('p > span').textContent = age
}

greating(person)

fName = 'Ivan'

function sayHello() {
    console.log('Hello');
}

const person1 = {
    fName: 'Ivan',
    sayHello: function() {
        console.log('Hello ' + this.fName );
    }
}

person1.sayHello()