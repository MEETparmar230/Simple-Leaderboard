import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL;

export default function UserList() {
    const [users,setUsers]  = useState([])

    useEffect(()=>{
        axios.get(`${apiUrl}/user`)
        .then((res)=>{
            if(res.data.length===0){
            toast.error("no user")
            }
            setUsers(res.data)
             console.log(res.data)

             
    
        })
        .catch((err)=>{
            console.log(err)
        })

         
   
        
    },[])

   
  return (
    <div className='mx-auto rounded-md bg-zinc-100 max-w-120 h-screen md:h-fit md:mt-5 p-4'>
<h1 className=' font-semibold text-2xl text-center underline text-zinc-700 mt-5'>LeaderBoard</h1>    
<ToastContainer position="top-center" autoClose={2000}/>
    <ul className='border border-zinc-300 rounded p-4 mt-10'>
    {users.map((user)=>(
        <li className='bg-zinc-200 border border-zinc-300 rounded my-2 py-1 px-2 flex items-center justify-between' key={user._id}>
           
             
            <span className='ms-2'>{user.name}</span>
            <div>{}</div>
            <div>
            <span className='me-5'>{user.points}</span>
            <button className='bg-zinc-500 px-2 rounded-lg text-sm  text-white hover:bg-zinc-600'>Claim</button>
            </div>
        </li>
    ))}
   </ul>
   <div className='flex justify-center mt-10 mb-5'>
   <Link to='/add'>
    <button className='w-fit px-2 bg-zinc-500 rounded text-white hover:bg-zinc-600' >ADD</button>
    </Link>
    </div>
    </div>
  )
}
