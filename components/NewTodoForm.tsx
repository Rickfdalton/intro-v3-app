//client component

'use client';

import { newTodo } from "@/utils/actions";


export default function NewTodoForm() {
  return (
    <>
        <form action={newTodo}>
            <input type="text" name="content" style={{color: 'red'}} className="border border-black"/>
            <button type="submit">Add Todo</button> 
        </form>
    </>
  );
}
