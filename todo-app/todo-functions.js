// Fetch existing data from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to the local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filter
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodo = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodo))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const printTodos = document.createElement('p')
    printTodos.textContent = todo.text
    return printTodos
}

// Get the DOM elements for list sunnary
const generateSummaryDOM = function (incompleteTodo) {
    const todoAmount = document.createElement('h2')
    todoAmount.textContent = `You have ${incompleteTodo.length} todos left.`
    return todoAmount
}