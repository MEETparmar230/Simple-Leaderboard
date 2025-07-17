import { useState } from 'react'

import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<UserForm/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
