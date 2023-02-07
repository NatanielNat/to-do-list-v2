import {Button,Wrapper} from "./styled";


const Buttons = ({ hideDone, tasks, toggleHideDone, setAllDone,removeAllTasks }) => (
    tasks.length > 0 && (
        <Wrapper>
            <Button
                onClick={toggleHideDone}
                className="buttons__style js-buttonHideAll"> {hideDone ? "Unhide" : "Hide"} Done Tasks</Button>

            <Button
                className="buttons__style js-buttonDoneAll"
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Complete All</Button>

            <Button
            onClick={removeAllTasks}
                className="buttons__style js-removeAllTasksDone">Remove All </Button>
        </Wrapper>
    )
);


export default Buttons;