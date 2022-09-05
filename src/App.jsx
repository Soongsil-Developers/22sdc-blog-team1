import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import { Routes, Route } from "react-router-dom";
import Signin from './component/Signin';
import Signup from './component/Signup';
import Settings from './component/Settings';
import Newarticle from './component/Newarticle';
import Profile from './component/Profile';
import ArticleDetail from './component/Article/ArticleDetail';
import { useState } from 'react';

function App() {

  const [auth,setAuth] = useState(false)
  console.log(auth)
  
  return (
    <div>
      <Navbar auth={auth}/>
        <Routes>
          <Route path='/' element={<Home auth={auth}/>}/>
          <Route path='/login' element={<Signin setAuth={setAuth} />}/>
          <Route path='/register' element={<Signup setAuth={setAuth}/>}/>
          <Route path='/settings' element={<Settings setAuth={setAuth}/>}/>
          <Route path='/editor' element={<Newarticle />}/> 
          <Route path='/a' element={<Profile />}/> 
          <Route path='/b' element={<ArticleDetail />}/> 
        </Routes>
      <Footer />
    </div>
  )
}

export default App
