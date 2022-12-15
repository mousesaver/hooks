import React, { useState } from 'react'

function App() {
  let [count, setCount] = useState(1)
  const [user, setUser] = useState({name: "Sean"})
  const [isSean, setIsSean] = useState(true)
  const increaseCount = () => {
    setCount(count + 1)
  }

  const setName = (name) => {
    setUser({name: name})
    setIsSean(false)
  }

  return (
    <div className='App'>
      <h1>The count is {count}</h1>
      <h2 style ={{color: isSean? "red" : "black"}}>The use is {user.name}</h2>
      <button onClick={increaseCount}>Hello</button>
      <button onClick={() => setName("Fan")}>Fan</button>
    </div>
  )

}

export default App;
