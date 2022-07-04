import{createContext, useState} from 'react'


const IsloggedInContext = createContext();


const IsloggedInContextProvider= ({children})=>{

    const [isloggedIn, setIsloggedIn] = useState({auth:null})

    return(
        <IsloggedInContext.Provider value={{isloggedIn,setIsloggedIn}}>
       {children}
        </IsloggedInContext.Provider>
    )
}

export {IsloggedInContextProvider,IsloggedInContext}

