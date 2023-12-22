import { UseAuthcontext } from './UseAuthcontext'
import { useWorkoutsContext } from './UseworkoutContext'

function UseLogout() {
      const {dispatch} = UseAuthcontext() 
      const {dispatch:workoutsDispatch} = useWorkoutsContext()
      function logout(){

        // remove user from storage 
        localStorage.removeItem('user')

        //dispatch logout action 

        dispatch({type:'LOGOUT'})
        workoutsDispatch({type:'SET_WORKOUTS',payload:null})
    }
 
    return {logout}
}

export default UseLogout