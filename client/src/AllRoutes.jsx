import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Question from './Pages/Quistions/Question.jsx'
import Askquestion from './Pages/Askquestion/Askquestion.jsx'
import Displayquestion from './Pages/Quistions/Displayquestion.jsx'
import Tags from './Pages/tags/tages.jsx'
import Users from './Pages/Users/Users.jsx'
import UserProfile from './Pages/UserProfile.jsx/UserProfile.jsx'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/Question' element={<Question />}/>
            <Route path='/AskQuestion' element={<Askquestion/>}/>
            <Route path='/Questions/:id' element={<Displayquestion/>}/>
            <Route path='/Tags' element={<Tags/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Users/:id' element={<UserProfile/>}/>
        </Routes>
    )
}

export default AllRoutes