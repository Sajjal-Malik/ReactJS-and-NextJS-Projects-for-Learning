"use client";
import React, { useState } from 'react'

const Shorten = () => {

    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState(false)

    const handleChange = (params) => {
      
    }
    
    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your Short URLs</h1>
            <div className='flex flex-col gap-3'>
                <input className='px-4 py-2 focus:outline-purple-600' value={url} type="text" placeholder='Enter your URL...' onChange={(e) => {setUrl(e.target.value)}} />
                <input className='px-4 py-2 focus:outline-purple-600' value={shortUrl} type="text" placeholder='Enter your preferrd short URL text' onChange={(e) => {setShortUrl(e.target.value)}} />
                <button className='bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold text-white'>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
