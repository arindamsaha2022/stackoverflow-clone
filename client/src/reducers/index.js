import {combineReducers } from 'redux'
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from './user'

import React from 'react'



export default combineReducers ({
    authReducer, currentUserReducer,questionsReducer,usersReducer
})


