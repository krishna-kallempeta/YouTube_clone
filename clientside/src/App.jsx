
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import AllRoutes from './components/AllRoutes'
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar'
import { useState } from 'react'
import CreateEditChanel from './pages/Chanel/CreateEditChanel'

function App() {
  const [toggleDrawerSidebar,setToggleSidebar] = useState({
    display:'none',
  });
 const toggleDreawer=()=>{
  if(toggleDrawerSidebar.display==='none'){
    setToggleSidebar({
      display:'flex'
    })
  }else{
    setToggleSidebar({
      display:'none'
    })
  }

 }

 const [EditCreateChanelBtn,setEditCreateChanelBtn]=useState(false)

  return (
    <Router>
      {
        EditCreateChanelBtn &&  <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/>
      }
      <Navbar
       setEditCreateChanelBtn={setEditCreateChanelBtn}
       toggleDreawer={toggleDreawer}/>
      {
        <DrawerSidebar 
        toggleDrawerSidebar={toggleDrawerSidebar}/>
      }
      <AllRoutes/>
    </Router>
  )
}

export default App
