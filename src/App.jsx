import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import { useEffect } from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer />

    </div>
  )
}

export default App
