import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    const login = () => {
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(true)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout } } >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}