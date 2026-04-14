"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Product } from "@/types/product"

export default function Page() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("products")
        .select("*")

      if (error) {
        console.log(error)
      } else {
        setProducts(data || [])
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  )
}