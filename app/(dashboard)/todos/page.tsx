import TodoList from '@/components/TodoList';
import db from '@/utils/db'

const getData = async () => {
    await new Promise((resolve,reject) => setTimeout(()=>resolve(), 1000))
    const todos = await db.todo.findMany({})
    return todos
}

export default async function TodosPage(){
    const todos = await getData();
    console.log(todos);

    return (<div>
        <h1>TodosPage</h1>
        <TodoList todos={todos}/>
    </div>)
}