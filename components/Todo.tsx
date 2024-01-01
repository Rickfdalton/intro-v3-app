'use client'

import { useTransition } from "react"
import {completeTodo} from '@/utils/actions'

export default function Todo({todo}){
    const [isPending, startTransition] = useTransition();

    return <div className={`border border-white/20 cursor-pointer ${todo.completed ? 'line-through text-blue-900' : ''}`} onClick={()=> startTransition(()=>completeTodo(todo.id))}>
        {todo.content}
    </div>
}