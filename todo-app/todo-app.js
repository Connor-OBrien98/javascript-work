const todos = getSavedTodos()

const filter = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filter)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filter)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filter.hideCompleted = e.target.checked
    renderTodos(todos, filter)
})

