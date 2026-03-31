import { Product } from "@/types/product";

export async function ProductsWithPagination( {
    page,
    limit,
}: {
    page: number;
    limit: number;
}): Promise<{products : Product[] ; total : number}>{
    const res = await fetch("http://localhost:3000/api/products?...", {
    cache: "no-store",
  });

    const products = (await res.json()) as Product[] ;

    return{
        products: products.slice((page - 1) * limit, page * limit),
        total: products.length,
    }
}