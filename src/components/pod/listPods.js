"use client"
import * as React from 'react';
import {  useState, useEffect } from 'react'
import Title from "@/components/tittle";


export function ListPods(){
  const [data, setData] = useState([])
  
  useEffect(() => { 

      fetch(`/api/pods/pods_list`)
        .then((res) => res.json())
        .then((data) => {
        setData(data.data)
        })
  

   },[])

    return (

    <div>
      <Title>Pods</Title>
        <div className="overflow-x-auto">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Total Points</th>
              </tr>
            </thead>
              <>{data.map((pod) => (
                <tbody key={pod.id}>
                  {/* row 1 */}
                  <tr className='m-6'>
                    <td>{pod.id}</td>
                    <td>{pod.name}</td>
                    <td>n/a</td>      
                  </tr>

                </tbody>
              ))}</>
          </table>
        </div>
    </div>
      
      
      
      
      
      
      
      

                
    )
}