import { useContext } from "react";
import { workoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = ()=>{

    const context = useContext(workoutsContext)
    
    if (!context) {
        
        throw new  Error('useWorkoutsContext must be used inside an WorkoutContextProvider')
    }

    return context
}