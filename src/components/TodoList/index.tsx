import * as C from "./styles"
import React, { useState } from 'react';

interface TodoProps {
    todo: Todo;
}

export const TodoList = ({todo}: TodoProps) => {
    const [isChecked, setIsChecked] = useState(todo.done)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }

    return(
        <C.Container done={isChecked}>
            <input type="checkbox" 
            checked={isChecked} 
            onChange={handleChangeInput} />
            
            <label> {todo.text} </label>
        </C.Container>
    )
       
}