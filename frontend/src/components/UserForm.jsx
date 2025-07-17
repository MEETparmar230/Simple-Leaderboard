import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_API_URL;

export default function UserForm() {

   const navigate = useNavigate()

    const [user,setUser] = useState({
        name:'',
    })
    
    const [error,setError] =useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault() 

        setError('')

        if(user.name===""){
            setError("Name can't be Empty")
            return;
        }

        try{
        setUser(user)
        await axios.post(`${apiUrl}/user`,user)
        navigate("/")
        console.log("new user Added",user)
        setUser({name:''})
        toast.success('new user added')
        }
        catch(err){
            console.log("Error",err)
            toast.error("unable to add user")
        }
    }

  return (
    <>
    <ToastContainer/>
    <div className='max-w-96 bg-zinc-100 p-4 md:mx-auto sm:mx-auto lg:mx-auto mt-5 pb-16 pt-8 rounded mx-6'>
    <div className=' flex flex-col gap-4 items-center justify-center'>
        <h1 className='mb-5 font-semibold text-2xl border-b text-zinc-700'>Add New User</h1>
        <div className='border border-zinc-300 rounded-md flex flex-col gap-5 items-center p-6 bg-zinc-300 '>
        <div className=''>
      <label htmlFor="name">Name:</label>
      <input className='border-2 bg-zinc-200 border-zinc-400 rounded focus:border-zinc-500 text-sm p-1 mx-2 outline-none' id='name' name="name" type="text" value={user.name} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
      {error && <p className='text-sm text-red-400 ms-14'>{error}</p> }
      </div>
      <button onClick={handleSubmit} className='bg-zinc-500 px-2 rounded-md text-white hover:bg-zinc-600 w-fit'>Add</button>
    </div>
    </div>
    </div>
    </>
  )
}
