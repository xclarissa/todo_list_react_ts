import React, { useState, KeyboardEvent } from 'react';
import * as C from './styles';

interface onEnterProps{
    onEnter:(taskName: string) => void
}
export const AddArea = ( {onEnter}: onEnterProps) => {
    const [inputText, setInputText] = useState('')

//funcao onchange input
    const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
// funcao do onKeyUp
const handleKeyUp = (e: KeyboardEvent) => {
    if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== ''){
        onEnter(inputText)
        setInputText('')
    }
}
    
    
    return(
        <C.Container>
            <div className="plus-image">➕</div>

            <input type="text"
            value={inputText}
            placeholder="Adicione uma tarefa" 
            onChange={handleAreaChange}
            onKeyUp={handleKeyUp}
             />
        </C.Container>
    )
}