import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Question from './Pages/Quistions/Question.jsx'
import Askquestion from './Pages/Askquestion/Askquestion.jsx'
import Displayquestion from './Pages/Quistions/Displayquestion.jsx'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/Question' element={<Question />}/>
            <Route path='/AskQuestion' element={<Askquestion/>}/>
            <Route path='/Questions/:id' element={<Displayquestion/>}/>
        </Routes>
    )
}

export default AllRoutes