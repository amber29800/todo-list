export const Task = (props) => {
    return (
        <div>
            <h1>{props.taskName}</h1>
            <button disabled={(props.completed)? true: false} onClick={() =>  {props.onComplete(props.id); props.deleteTask(props.id)}}>Completed</button>
            <button onClick={() => props.deleteTask(props.id)}>Delete Task</button>
        </div>
    );
}