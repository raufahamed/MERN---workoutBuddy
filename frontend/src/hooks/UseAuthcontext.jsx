import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
export const UseAuthcontext = ()=>{

    const context = useContext(Authcontext)
    
    if (!context) {
        
        throw new  Error('AuthContext  must be used inside an AuthContext provider')
    }

    return context
}