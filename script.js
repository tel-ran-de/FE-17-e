const user = {
    fName: 'Ivan',
    lName: 'Ivonoff',
    age: 30,
    getFullName: function() {
        return `${this.fName} ${this.lName}`
    }
}

document.querySelector('h1 span').textContent = user.getFullName()