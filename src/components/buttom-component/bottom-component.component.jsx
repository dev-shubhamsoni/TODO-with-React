import { Button } from "../ui/button";

const BottomComponent = () => {
    return (
        <>

            <span className=" text-xl">You have 4 pending tasks</span>
            <Button variant="destructive">Clear All</Button>
        </>
        

    )
}

export default BottomComponent;