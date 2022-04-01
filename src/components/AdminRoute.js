import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  return userInfo && userInfo.isAdmin ? children : <Navigate to='/signin'/>
}
