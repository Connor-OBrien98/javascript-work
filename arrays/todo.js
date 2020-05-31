const todos = [{
    text: 'Walk the dog',
    completed: false
}, {
    text: 'Clean bedroom',
    completed: true
}, {
    text: 'Wash dishes',
    completed: false
}, {
    text: 'Cut the grass',
    completed: false
}, {
    text: 'Feed the cat',
    completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (a.completed > b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoTitle) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)