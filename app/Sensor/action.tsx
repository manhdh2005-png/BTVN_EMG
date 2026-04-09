"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

//  ADD
export async function addSensor(value1: number, value2: number) {
  await supabase.from("sensor").insert([
    {
      value1,
      value2,
    },
  ])

  revalidatePath("/sensor")
}

//  DELETE
export async function deleteSensor(id: number) {
  await supabase.from("sensor").delete().eq("id", id)

  revalidatePath("/sensor")
}

//  UPDATE 
export async function updateSensor(
  id: number,
  value1: number,
  value2: number
) {
  await supabase
    .from("sensor")
    .update({ value1, value2 })
    .eq("id", id)

  revalidatePath("/sensor")
}