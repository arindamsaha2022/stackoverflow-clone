const authReducer = (state={data:null}, action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, data: action?.data}
            break;
    
        default:
            return state
            break;
    }
}

export default authReducer