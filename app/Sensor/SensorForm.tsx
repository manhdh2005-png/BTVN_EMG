"use client"

import { useState } from "react"
import { addSensor } from "./action"

export default function SensorForm() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")

  const handleSubmit = async () => {
    await addSensor(Number(value1), Number(value2))
    location.reload()
  }

  return (
    <div>
      <h2>Add Sensor</h2>

      <input
        placeholder="Value 1"
        onChange={(e) => setValue1(e.target.value)}
      />

      <input
        placeholder="Value 2"
        onChange={(e) => setValue2(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}