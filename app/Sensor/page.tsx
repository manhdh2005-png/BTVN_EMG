import SensorList from "./SensorList"
import SensorForm from "./SensorForm"
import { createSupabaseServer } from "@/lib/supabaseServer"
import { redirect } from "next/navigation"

export default async function Page() {
  const supabase = await createSupabaseServer()

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

  console.log("DATA:", data)

  return (
    <div>
      <h1>Sensor Data</h1>

      <SensorForm />

      <SensorList data={data || []} />
    </div>
  )
}