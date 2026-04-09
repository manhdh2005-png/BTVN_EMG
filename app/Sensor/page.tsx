import { supabase } from "@/lib/supabase"
import { redirect } from "next/navigation"
import SensorList from "./SensorList"
import SensorForm from "./SensorForm"

export default async function Page() {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const { data } = await supabase
    .from("sensor")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1>Sensor Data</h1>

      <SensorForm />

      <SensorList data={data || []} />
    </div>
  )
}