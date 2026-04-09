"use client"

import { deleteSensor } from "./action"

type Sensor = {
  id: number
  created_at: string
  value1: number
  value2: number
}

export default function SensorList({ data }: { data: Sensor[] }) {
  return (
    <div>
      {data.map((s) => (
        <div key={s.id}>
          <p>{s.value1} - {s.value2}</p>

          <button onClick={() => deleteSensor(s.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}