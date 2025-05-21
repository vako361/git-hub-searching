import Search from './components/Search'
import Interface from './components/Interface'
import './App.css'
import { useEffect, useState } from 'react'
export type gitHubUser = {
  id:number | null;
  login:string | null;
  avatar_url:any;
  created_at: string |null;
  public_repos:number | null
  followers:number | null;
  following:number | null;
  location:string | null;
  html_url: string | null;
  company:string | null;
  twitter_username:string | null;
  bio: string | null;
}
function App() {
   const [user, setUser] = useState<gitHubUser | null>(null)

   const [userInput, setUserInput] = useState<string>('')

   const [submit, setSubmit] = useState<boolean>(false)
  
   const [theme, setTheme] = useState<boolean>(false)
   useEffect(() => {
   fetch('https://api.github.com/users/octocat')
    .then(response => response.json())
    .then(data => {
    setUser(data); 
    })
    .catch(error => console.log(error));
   }, [])
useEffect(() => {
  if (!submit) return;
  fetch(`https://api.github.com/users/${userInput}`)
    .then(response => response.json())
    .then(data => {
      setUser(data); 
    })
    .catch(error => console.log(error));

}, [submit]);

  return (
    <div className={theme ? 'bg-[#141D2F] w-full h-full flex flex-col items-center justify-center' : 'bg-[#F6F8FF] w-full h-full flex flex-col items-center justify-center'}>
   <Search setUserInput={setUserInput} 
   setSubmit={setSubmit} submit={submit} 
   setTheme={setTheme} theme={theme}/>
    
    <Interface user={user} theme={theme} />
    </div>
  )
}

export default App
