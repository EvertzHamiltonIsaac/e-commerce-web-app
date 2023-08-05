import React, { useEffect, useState } from 'react'

const useUser = () => {
    const [user, setUser] = useState({});
    const [sessionToken, setSessionToken] = useState("");
    const [message, setMessage] = useState("");
 
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
        setSessionToken(localStorage.getItem("sessionToken"));
        setMessage(localStorage.getItem("message"));
    }, [])
    
    return {user, sessionToken, message}
}

export default useUser