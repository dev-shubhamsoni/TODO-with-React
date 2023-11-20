import { useState, useEffect } from 'react';

import Heading from './components/ui/heading';
import InputArea from './components/input-area/input-area.component';
import Todos from './components/todos/todos.component';
import BottomComponent from './components/buttom-component/bottom-component.component';


import './App.css'
// import { Input } from './components/ui/input';

function App() {

  const [inputAreaData, setInputAreaData] = useState('');
  const [todos, setTodos] = useState([]);
  const [pendingTask, setPendingTask] = useState(0)


  const settingTodo = () => {
    setTodos([...todos, { id: crypto.randomUUID(), text: inputAreaData, completed: false }])
    setInputAreaData('');
  }

  const delTodo = (id) => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== id)
    })
  }

  const checkTodo = (id) => {
    setTodos(prevTodo => {
      return prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const deleteAllTodo = () => {

    setTodos([]);

  }

  useEffect(() => {

    const filterTodo = todos.filter((todo) => {
      return !todo.completed;
    })

    setPendingTask(filterTodo.length)

  }, [todos])

  return (
    <div className='bg-green-50 h-screen w-2/6 rounded-xl'>

      <Heading />
      <InputArea value={inputAreaData} setInputAreaData={setInputAreaData} settingTodo={settingTodo} />

      {/* todos area */}

      <div className=' max-h-[384px] overflow-y-auto'>

        {todos.map((todo) => <Todos key={todo.id} id={todo.id}
          todoText={todo.text} delTodo={delTodo} checkTodo={checkTodo} completed={todo.completed} />)}

      </div>

      {/* pending task and clear all */}

      <div className='flex align-middle justify-between mt-10 mx-10'>
        <BottomComponent pendingTask={pendingTask} deleteAllTodo = {deleteAllTodo} allTodos = {todos.length}/>
      </div>

    </div>
  )
}

export default App;
