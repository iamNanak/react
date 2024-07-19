import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(){
    const {userid} = useParams()
    return (
        <h1 className='bg-orange-700 text-white text-3xl p-4'>User: {userid}</h1>
    )
}