import React from "react"
import { useSelector } from "react-redux"

const Counter = () => {
  const count = useSelector(state => state) // valid if state is just a number
  return <p>Count: {count}</p>
}

export default Counter
