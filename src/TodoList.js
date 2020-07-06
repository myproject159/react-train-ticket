import React, {useState, useCallback, useRef} from 'react'
import './index.css'

let idSeq = Date.now()

function Control(props) {
    const { addTodo } = props
    const inputRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        const newText = inputRef.current.value.trim()
        if(newText.length === 0){
            return
        }
        addTodo({
            id: ++idSeq,
            text: newText,
            complete: false
        })
        inputRef.current.value = ''
    }
    return (
        <div className="control">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="new-todo"
                    ref={inputRef}
                    placeholder="What needs to be done?"
                >
                </input>
            </form>
        </div>
    )
}

function TodoItem(props) {
    const {
        todo: {id,text,complete},
        toggleTodo,
        removeTodo
    } = props
    return (
        <li className='todo-item'>
            <input type="checkbox" onChange={onChange} checked={complete}></input>
            <label className={}>{text}</label>
        </li>
    )
}

function Todos() {
    const { todos,toggleTodo, removeTodo } = props
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                         />
                    )
                })
            }
        </ul>
    )
}
 
function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = useCallback((todo) => {
        setTodos(todos => [...todos, todo])
    },[])
    const removeTodo = useCallback((id) => {
        setTodos(todos => todos.filter(todo => {
            return todo.id !== id
        }))
    },[])
    const toggleTodo = useCallback((id) => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id
                ? {
                    ...todo,
                    complete: !todo.complete
                }
                : todo
        }))
    },[])
    return (
        <div className="todo-list">
            <Control addTodo = {addTodo}/>
            <Todos removeTodo = {removeTodo} toggleTodo = {toggleTodo } todos={todos}/>
            <div>test123</div>
        </div>
    )
}

export default TodoList