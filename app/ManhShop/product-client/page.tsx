"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "../product/ProductCard";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const {
    data: products,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = (await res.json()) as Product[];
      return products;
    },
  });

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error Layout</div>;
  }

  if (!products) {
    return <div>No product found</div>;
  }

  return (
    <div className="p-10">
      {/* Header */}

      <header
        className="relative bg-black w-full"
        style={{
          height: `320px`,
          backgroundImage: "url('/BTVN6/zozzoshop1.jpg')",
          backgroundSize: `cover`,
          backgroundPosition: `center 55%`,
        }}
      >
        <div className="relative h-full container mx-auto px-10 flex flex-col justify-center items-start">
          <div className="mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter italic uppercase">
              MẠNH <span className="text-stone-300">SHOP</span>{" "}
              {/* Đổi màu 'Shop' sang tông sepia */}
            </h1>
            <div className="h-1.5 w-32 bg-stone-100 mt-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
          </div>

          <Link href="/ManhShop/product/add">
            <button className="group relative flex items-center gap-3 bg-stone-900/60 backdrop-blur-md border border-stone-700 hover:bg-white hover:text-stone-950 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl active:scale-95">
              <span className="bg-white p-1 rounded-lg transition-colors group-hover:bg-stone-950 group-hover:text-white text-stone-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
              THÊM SẢN PHẨM MỚI
            </button>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard p={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
