import React from 'react'
import Counter from './Component/Counter'
import Header from './Component/Header'
import Auth from './Component/Auth'
import { useSelector } from 'react-redux'
import UserProfile from './Component/UserProfile'

const App = () => {

 const isAuth= useSelector(state=>state.auth.isInitialAuth)
  return (
    <div>
    <Header/>
   { !isAuth && <Auth/>}
   {  isAuth && <UserProfile/>}
    <Counter/>
    
      
    </div>
  )
}

export default App
