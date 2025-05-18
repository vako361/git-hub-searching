import Search from './components/Search'
import Interface from './components/Interface'
import './App.css'
import { useEffect, useState } from 'react'
function App() {
   const [user, setUser] = useState<string>("")
useEffect
    const fetchData = async () => {
    let response = await fetch(`https://api.github.com/users/${user}`)
    let result =  await response.json()
    console.log(result.id)
    }
  return (
    <div className='bg-[#F6F8FF] w-full h-full flex flex-col items-center justify-center'>
   <Search fetchData={fetchData} user={user} setUser={setUser} />
    <Interface user={user}/>
    </div>
  )
}

export default App
