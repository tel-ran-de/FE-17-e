const user = {
    fName: 'Ivan',
    lName: 'Ivonoff',
    age: 30,
    getFullName: function() {
        return `${this.fName} ${this.lName}`
    }
}

const person = {
    fName: 'Frosya',
    lName: 'Burlakova',
    age: 20,
    getFullName: function() {
        return `${this.fName} ${this.lName}`
    }
}

export default user

export {person}