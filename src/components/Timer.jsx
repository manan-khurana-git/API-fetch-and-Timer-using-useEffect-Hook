import React,{useEffect, useState} from 'react'

const Timer=()=> {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                setSeconds((prev) => prev + 1)
            },1000)
        }
        return () => {
            clearInterval(interval)
        }
    },[isRunning])
  return (
    <div className='bg-gray-200 border m-5'>
        <h2 className='text-center bg-black text-white rounded-md m-5 p-5' >Timer</h2>
        <h1 className='text-6xl text-center m-5'>{seconds}</h1>
        <div className='flex justify-center items-center'>
            <button className='p-3 m-3 w-40 rounded-md text-2xl text-white border bg-teal-400' onClick={()=>{setIsRunning(true)}}>Start</button>
            <button className='p-3 m-3 w-40 rounded-md text-2xl text-white border bg-purple-400' onClick={()=>{setIsRunning(false)}}>Stop</button>
            <button className='p-3 m-3 w-40 rounded-md text-2xl text-white border bg-orange-400' onClick={()=>{setSeconds(0);setIsRunning(false)}}>Reset</button>
        </div>
    </div>
  )
}

export default Timer;
