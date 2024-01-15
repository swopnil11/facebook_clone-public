import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

export default function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
  return (
    <div className="login">
        <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/120px-2023_Facebook_icon.svg.png" alt="" />
            <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-500x281.png" alt="" />
        </div>
        <Button type="submit1" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}
