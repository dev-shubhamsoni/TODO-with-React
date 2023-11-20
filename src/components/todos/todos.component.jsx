import { useState } from "react";
import { Button } from "../ui/button";
import './todos.style.css'

import { X } from "lucide-react"
import { CheckCheck } from "lucide-react"


const Todos = ({ todoText, delTodo, id, checkTodo, completed }) => {

  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`todos-container relative flex ml-10 pl-4  mr-20 
          items-center py-4  rounded-xl mb-2 ${completed ? "completed" : "bg-lime-300"
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-lg pr-24">{todoText}</p>
      {isHovered && (
        <div className="buttons absolute right-0 flex items-center pr-2">
          <Button onClick={() => checkTodo(id)} className='mr-1 hover:bg-green-400 border-0' variant="outline" size="icon">
            <CheckCheck className="h-4 w-4" />
          </Button>
          <Button onClick={() => delTodo(id)} className='bg-rose-600 border-0 text-white' variant="outline" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );



}

export default Todos;