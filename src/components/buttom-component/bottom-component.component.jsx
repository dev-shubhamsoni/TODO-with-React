import { Button } from "../ui/button";

const BottomComponent = ({pendingTask, deleteAllTodo, allTodos}) => {
    return (
        <>

            <span className=" text-xl">You have {pendingTask} pending tasks</span>
            <Button disabled = {allTodos === 0} onClick = {deleteAllTodo} variant="destructive">Clear All</Button>
        </>
        

    )
}

export default BottomComponent;