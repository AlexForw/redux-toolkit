import { useDispatch, useSelector } from "react-redux"
import { changeEvent } from "../../features/todo/todoSlice";

const TodoItem = () => {

    const todos = useSelector(state => state.todo.todos)

    const dispatch = useDispatch()
    return (
        <div>
            {todos.map((elem) => {
                return (
                    <div key={elem.id}>
                        <div className='flex justify-between items-center my-2'>
                            <div className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400' onClick={() => console.log(dispatch(changeEvent(elem)))}>
                                Complete
                            </div>
                            <div className={`text-sm ${elem.isCompleted ? 'line-through font-medium text-lime-400' : ''}`}>
                                {elem.value}
                            </div>
                            <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                                Delete
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoItem