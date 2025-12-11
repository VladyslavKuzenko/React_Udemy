import { redirect } from "react-router-dom"

export const action = () => {
    localStorage.removeItem('expiration')
    localStorage.removeItem('token')
    return redirect('/auth?mode=login')
}