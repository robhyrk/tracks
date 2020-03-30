import {AsyncStorage} from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return {errorMessage: 'hello', token: action.payload}
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({email, password})=> {
        console.log(email, password)
        ///make api request to sign up wuth email and password
        //if we sign up, modify our state and say we are authenticated
        //if sign up fail, show error
        try {
            const response = await trackerApi.post('signup', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            console.log(response.data.token)

            navigate('TrackList')
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    }
}

const signin = (dispatch) => {
    return () => {
        //sign out
    }
}

const signout = (dispatch) => {
    return ({email, password}) => {
        ///try to sign in
        //handle success and update state
        //or show error
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
)
