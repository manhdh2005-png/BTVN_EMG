export type Product = {
  id: string
  name: string
  slug: string
  description: string | null
  price: number
  sale_price: number | null
  image_url: string | null
  stock: number
  category_id: string
  created_at: string
}