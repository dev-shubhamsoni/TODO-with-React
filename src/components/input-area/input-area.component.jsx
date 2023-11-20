import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ChevronRight } from "lucide-react"


const InputArea = ({value, setInputAreaData, settingTodo}) => {
    return (
        <div className=' flex gap-x-2 px-10 py-10'>
        <Input value = {value} onChange = {(e) => setInputAreaData(e.target.value)} className='w-80 font-semibold' input='text' placeholder='Add your Todo' />
        <Button onClick = {settingTodo}  variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    )
}

export default InputArea;