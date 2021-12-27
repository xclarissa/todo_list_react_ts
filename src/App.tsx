import { useState } from 'react';
import * as C from './App.styles';
import { TodoList } from './components/TodoList';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Todo[]>([
    {id: 1, text: "Work", done: true},
    {id: 2, text: "Walk the dog", done: false},
    {id: 3, text: "Go to gym", done: true}
  ])

 const handleAddTask = (taskName: string) => {
   let newList = [...list];
   newList.push({
     id: list.length + 1,
     text: taskName,
     done: false
   })
   setList(newList)
 }
 
  return(
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <TodoList key={index} todo={item} />
          ))}
          
            
      </C.Area>
    </C.Container>
  )
}

export default App;
