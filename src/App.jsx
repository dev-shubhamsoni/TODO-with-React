import { useState } from 'react';

import Heading from './components/ui/heading';
import InputArea from './components/input-area/input-area.component';
import Todos from './components/todos/todos.component';
import BottomComponent from './components/buttom-component/bottom-component.component';

import {v4 as uuidv4} from 'uuid';


import './App.css'
// import { Input } from './components/ui/input';

function App() {

  const [inputAreaData, setInputAreaData] = useState('');
  const [todos, setTodos] = useState([]);
  const [totalTask, setTotalTask] = useState()

  const settingTodo = () => {
    setTodos([...todos, {id: uuidv4(), text: inputAreaData, completed: false}])
    setInputAreaData('');
  }
console.log(todos.length);
  return (
    <div className='bg-green-50 h-screen w-2/6 rounded-xl'>

      <Heading />
      <InputArea value={inputAreaData} setInputAreaData={setInputAreaData} settingTodo= {settingTodo} />

      {/* todos area */}

      <div className=' h-96'>

        {todos.map((todo) => <Todos key={todo.id} todoText = {todo.text} />)}
        
      </div>

      {/* pending task and clear all */}

      <div className='flex align-middle justify-between mt-10 mx-10'>
        <BottomComponent />
      </div>

    </div>
  )
}

export default App;
