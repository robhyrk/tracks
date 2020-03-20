import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const signup = (dispatch) => {
    return ({email, password}) => {
        ///make api request to sign up wuth email and password

        //if we sign up, modify our state and say we are authenticated

        //if sign up fail, show error
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
    {isSignedIn: false}
)
