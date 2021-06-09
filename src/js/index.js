import user, {person} from './user'

document.querySelector('h1 span').textContent = user.getFullName()
document.querySelector('h2 span').textContent = person.getFullName()