import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import { useEffect } from 'react'

function App() {
  const loc = useLocation()
  useEffect(()=>{
    if(loc.pathname === '/'){
      document.title = "Clothes - Home"
    }else{
      document.title = `Clothes ${loc.pathname.replace("/", "- ")}`;
    }
    
  },[loc.pathname])

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
