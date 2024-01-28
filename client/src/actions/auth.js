import { setCurrentUser } from './currentUser'
import * as api from '../api';

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: 'AUTH', data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    navigate('/');
  } catch (error) {
    console.log(error,"error ro signup");
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: 'AUTH', data });
    dispatch({ type: 'LOAD_PROFILE', payload: JSON.parse(localStorage.getItem('Profile')) });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
