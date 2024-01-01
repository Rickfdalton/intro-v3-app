import Todo from "./Todo"

export default function TodoList({todos}){
    return(
        <div>
        <h1>aa</h1>
        {todos.map(todo =>(
            <Todo todo={todo} key={todo.id}/>
        ))}
        </div>
    )

}