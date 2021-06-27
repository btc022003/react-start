import React,{useState} from 'react'

function Counter({step}) {
  const [count, setCount] = useState(1)
  const clickHandle = () => {
    setCount(c=>c+1)
  }
  return (
    <div>
      <p>当前组件的step值为：{step}</p>
      <button className="btn" onClick={clickHandle}>计数器-{count}</button>
    </div>
  )
}

export default Counter
