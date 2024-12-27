import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todo() {
    const [todo, setTodo] = useState("");
    const [allTodo, setAllTodo] = useState([]);
    
    const handleAdd = () =>{
        setAllTodo([...allTodo, {id:uuidv4(), todo, isCompleted: false}])
        setTodo("");
    }
    const handleClick = (e) =>{
        setTodo(e.target.value)
    }
    const handleEdit = () =>{

    }
    const handleDelete = () =>{

    }
  return (
    <div className='md:w-2/3 w-full mx-auto bg-slate-300 rounded-md m-4 px-5 min-h-[80vh] '>
        <h2 className='text-center font-bold text-xl p-4'>Toaday's Goals</h2>
        {/* <div className=''> */}
            <div className='flex gap-2 px-5 mb-2 justify-center'>
                <input type='text' onChange={handleClick} value={todo} placeholder='Write your todo here...' className='md:w-2/3 w-[95vw] rounded-md p-2'/> 
                <button onClick={handleAdd} className='bg-slate-900 text-white rounded-md px-5 font-semibold p-2'>Add</button>
            </div>
            <div className=' flex justify-center w-full'>
            <div className=' p-5 w-full  mx-auto md:w-4/5'>
                <h2 className='font-semibold text-lg my-1'>Your Goals:</h2>
                {allTodo.map((item) => (
                    <div className='mb-2 flex justify-between w-full'key={item.id} >
                        <input type='checkbox' />
                        <span className='text-black text-'>{console.log(item.id)} {item.todo}</span>
                        
                        <div className='flex'>
                        <span onClick={handleEdit} className='bg-green-600 rounded-md px-3 p-1 cursor-pointer font-semibold mx-2'>
                            <i className='bx bx-edit-alt text-white'></i>
                        </span> 
                        <span onClick={handleDelete} className='bg-red-600 rounded-md px-3 p-1 cursor-pointer font-semibold '> 
                            <i className='bx bx-trash text-white text-lg'></i>
                        </span> 
                        </div>
                    </div>
                ))}
            </div>
            </div>
    </div>
  )
}

export default Todo