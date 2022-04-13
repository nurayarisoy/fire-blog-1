import { createContext, useState } from 'react'
export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState()
  return (
    <AuthContext.provider value={{ currentUser }}>
      {props.children}
    </AuthContext.provider>
  )
}

export default AuthContextProvider
