const URL = 'https://jsonplaceholder.typicode.com'
let users = []
let todos = []
let posts = []

const main = () => {
    getUsers()
}

const getUsers = () => {
    fetch(`${URL}/users`)
        .then(response => response.json())
        .then(usersArray => {
            users = usersArray
            renderUsers()
        })
        .catch(e => console.log(e.message))
}

const renderUsers = () => {
    const ul = document.querySelector('.users-list')
    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = user.username
        li.id = `user_${user.id}`
        li.addEventListener('click', userClickHandle)
        ul.appendChild(li)
    })
}


const userClickHandle = event => {
    event.preventDefault()
    let id = +event.target.id.split('_')[1]
    getTodosById(id)
    renderUserName(id)
    getPostsById(id)
}

// async function test() {
//     let a = await getTodosById(1);
// }

// const test1 = async function() {
//     let a = await getTodosById(1);
// }


const getTodosById = async userId => {

    try {
        const response = await fetch(`${URL}/todos?userId=${userId}`)
        todos = await response.json()
        renderTodos()
    } catch(e) {
        console.log(e.message)
    } 
}

const renderTodos = () => {
    const ul = document.querySelector('.todos-list')
    ul.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.title
        li.id = `todo_${todo.id}`
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

const getPostsById = async userId => {
    try {
        const response = await fetch(`${URL}/posts?userId=${userId}`)
        posts = await response.json()
        renderPosts()
    } catch(e) {
        console.log(e.message)
    } 
}

const renderPosts = () => {
    const ul = document.querySelector('.posts-list')
    ul.innerHTML = ''
    posts.forEach(post => {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        h3.textContent = post.title
        li.appendChild(h3)
        const div = document.createElement('div')
        div.classList.add('hide')
        div.innerText = post.body
        li.appendChild(div)
        li.addEventListener('click', event => {
            event.preventDefault()
            event.currentTarget.querySelector('div').classList.toggle('hide')
        })
        ul.appendChild(li)
    })
}

main()

// webpack