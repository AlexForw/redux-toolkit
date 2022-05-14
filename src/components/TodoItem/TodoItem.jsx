import { useDispatch, useSelector } from "react-redux"
import { changeEvent, deleteTodo } from "../../features/todo/todoSlice";

const TodoItem = () => {

    const todos = useSelector(state => state.todo.todos)

    const dispatch = useDispatch()
    return (
        <div>
            {todos.length > 0 ? <div>{
                todos.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <div className='flex justify-between items-center my-2'>
                                <div className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400' onClick={() => dispatch(changeEvent(elem))}>
                                    Complete
                                </div>
                                <div className={`text-sm ${elem.isCompleted ? 'line-through font-medium text-lime-400' : ''}`}>
                                    {elem.value}
                                </div>
                                <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer' onClick={() => dispatch(deleteTodo(elem))}>
                                    Delete
                                </div>
                            </div>
                        </div>
                    )
                })
            }</div> : <div>Haven't tasks</div>
        }
        </div>
    )
}

export default TodoItem