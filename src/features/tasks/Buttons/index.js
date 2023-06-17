import { Button, Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, removeAllTasks } from "../../../tasksSlice";


const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks)
    const dispatch = useDispatch()

    return (
        tasks.length > 0 && (

            <Wrapper>

                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    className="buttons__style js-buttonHideAll"> {hideDone ? "Unhide" : "Hide"} Done Tasks</Button>

                <Button
                    className="buttons__style js-buttonDoneAll"
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}>
                    Complete All</Button>

                <Button
                    onClick={() => dispatch(removeAllTasks())}
                    className="buttons__style js-removeAllTasksDone">Remove All </Button>
            </Wrapper>

        )
    );
}


export default Buttons;