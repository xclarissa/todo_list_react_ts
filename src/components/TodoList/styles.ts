import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(( {done}: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    align-items: center;

    input{
        width: 20px;
        height: 20px    
    }

    label{
        color: #CCC;
        margin-left: 5px;
        text-decoration: ${done ? 'line-through' : 'initial'} ;
    }

`
))