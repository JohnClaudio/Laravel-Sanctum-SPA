import http from './api'
import { useNavigate } from "react-router-dom";

const logIn = () => {
    Cookies.set('ticket_management_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'})
    useNavigate("/path/to/push");

  }
const logOut = () => {
    if (typeof window !== 'undefined') {
        // remove logged in user's cookie and redirect to login page
        Cookies.remove('ticket_management_is_user_logged_in', {expires: 86400, sameSite: 'lax'})
        router.push('/login')
    }

}

export {logIn,logOut}