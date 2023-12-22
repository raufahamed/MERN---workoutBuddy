import React, { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/UseworkoutContext'
import WorkoutDetail from '../Components/WorkoutDetail'
import Workoutform from '../Components/Workoutform'
import { UseAuthcontext } from '../hooks/UseAuthcontext'

function Home() {
    const {workouts,dispatch} = useWorkoutsContext()
    const {user} = UseAuthcontext()
  
  useEffect(()=>{
    if(user){
       fetchWorkouts()
    }
    },[dispatch,user])

    async function fetchWorkouts (){
    const response = await fetch('http://localhost:3030/api/workouts',{
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    
    const json = await response.json()

      if(response.ok){
        dispatch({type:'SET_WORKOUTS',payload:json})
      }
  }
    return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=>(
       <WorkoutDetail
       key={workout._id}
       workout={workout}
       />

        ))}
      </div>
      <Workoutform/>
     </div>
  )
}

export default Home