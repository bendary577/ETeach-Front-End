import React, { useState, useEffect} from 'react'

const AuthenticationContext = React.createContext()

const AuthenticationProvider = ({children}) =>  {

  const [token, setToken] = useState(null);
  const [username, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [role, setRole] = useState(null);


  useEffect(()=>{
    sessionStorage.setItem('username', JSON.stringify(username));
  },[username])

  useEffect(()=>{
    sessionStorage.setItem('userId', JSON.stringify(userId));
  },[userId])

  useEffect(()=>{
    sessionStorage.setItem('accountType', JSON.stringify(accountType));
  },[accountType])

  useEffect(()=>{
    sessionStorage.setItem('role', JSON.stringify(role));
  },[role])


  useEffect(()=>{
    sessionStorage.setItem('token', JSON.stringify(token));
  },[token])

    return (
      <AuthenticationContext.Provider
        value={{
            username,
            setUserName,
            userId,
            setUserId,
            token,
            setToken,
            accountType,
            setAccountType,
            role,
            setRole
        }}
      >
        {children}
      </AuthenticationContext.Provider>
    )
  }


export default AuthenticationContext

export { AuthenticationProvider }