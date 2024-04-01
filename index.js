const inputTodo = document.getElementsByClassName('inputTodo')
const tableTodo = document.getElementsByClassName('tableTodo')

const createTodo = () =>{
    const todoText = inputTodo.value.trim()
    if(todoText !== ''){
        const li = document.createElement('input')
        li.type = 'radio';
        li.textContent = todoText
        tableTodo.appendChild(li)
        inputTodo.value = ''
    }
    
}
