import { useState } from "react"
import { useDispatch } from "react-redux"
import { setTodoItem } from "../../features/todo/todoSlice"

const Form = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    
    const addValue = (value) => {
        dispatch(setTodoItem({
            value,
            id: Date.now(),
            isCompleted: false,
        }))
        setValue('')
    }

    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={() =>{
                    if(value && (!!+value || value === '0')){
                        return addValue(value)
                    }
                }}
            >
                Submit
            </button>
        </form>
    )
}

export default Form