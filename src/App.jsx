import React from 'react'
import Datafetch from './components/datafetch'
import Posts from './components/Posts'
import Timer from './components/Timer'
const App = () => {
  return (
    <div>
      {/* The UseEffect Hook in React allows functional components to execute side effects-such as fetching data,updating
       the DOM manually,or managing timers-after the browser has updated the screen  */}
      <h1 className='bg-blue-200 text-center text-3xl mt-1.5 text-black' >DataFetch</h1>
      <Datafetch/>
      <Posts/>
      <Timer/>
    </div>
  )
}

export default App
