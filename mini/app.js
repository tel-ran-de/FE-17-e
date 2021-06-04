const URL = 'https://jsonplaceholder.typicode.com'
let users = []
let todos = []

const main = () => {
    getUsers()
    // renderUsers()
}

const getUsers = () => {
    fetch(`${URL}/users`)
        .then(response => response.json())
        .then(usersArray => {
            users = usersArray
            renderUsers()
        })
}

const renderUsers = () => {
    const ul = document.querySelector('.users-list')
    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = user.username
        li.id = `id_${user.id}`
        li.addEventListener('click', userClickHandle)
        ul.appendChild(li)
    })
}


const userClickHandle = event => {
    event.preventDefault()
    let id = +event.target.id.split('_')[1]
    getTodosById(id)
    renderUserName(id)
}

const getTodosById = userId => {
    fetch(`${URL}/todos?userId=${userId}`)
        .then(response => response.json())
        .then(todosArray => {
                todos = todosArray
                renderTodos()
            })
}

const renderTodos = () => {
    const ul = document.querySelector('.todos-list')
    ul.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.title
        if (todo.completed) {
            li.classList.add('complited')
        }
        ul.appendChild(li)
    })
}

const renderUserName = userId => {
    const idx = users.findIndex(u => u.id === userId)
    if (idx !== -1) {
        document.querySelector('#todos h2 span').textContent = users[idx].name
    }
}

main()