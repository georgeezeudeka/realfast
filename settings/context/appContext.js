import { createContext, useState } from "react";

const AppContext = createContext(); 
const AppProvider = ({children}) => {
    const [uid,setUid] = useState('t7rtr64');
    const [email,setEmail] = useState('george@gmail.com');

    return (
        <AppContext.Provider value={{uid,setUid,email,setEmail}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}