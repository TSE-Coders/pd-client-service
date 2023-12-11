
"use client"
import {  useState, useEffect } from 'react'

// Connect to RandomUsers endpoint to gather display a Racer in the marquee

export function RandomPlayer(){
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [check, setCheck] = useState(0)
  
 async function fetchPlayer(){
     const res = await fetch(`/api//players/random_player`)
     const payload = await res.json() 
      setData(payload.data)
      console.log(typeof data.name == "undefined", 'from fetch')
      typeof data.name == "undefined"? isLoading : setLoading(false)
       
  }
  
  useEffect(() => {  
    
     console.log(isLoading)
    const id = setInterval(() => {
                  fetchPlayer()
                  setCheck(check + 1)
  console.log('from useEffect')
                }, 5000);
    return () => clearInterval(id);            
  },[check])   

  
    return (
    <div>
      <div>{isLoading? 
        
        <h1>loading</h1>

        : 

        <div className= "columns-1" >
          <h2 className="" >{data.name} from {data.pod.name} </h2>

        </div> 

      }</div>
    </div>
       

    )
}




