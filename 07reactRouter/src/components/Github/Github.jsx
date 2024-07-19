import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(){
    const data = useLoaderData()
    // const [data, setdata] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/iamNanak')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setdata(data)
    //     })
    // }, [])



    return (
        <div className='bg-orange-700 text-white text-3xl p-4' ><h1>Github followers: {data.followers}</h1>
        <img className='' src={data.avatar_url} alt="git pfp" width={300} />
        </div>
    )
}

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/iamNanak')
   return response.json()
}