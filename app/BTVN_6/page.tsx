"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-10">
      {/* Header */}

      <header className="relativate bg-black w-full"
              style={{
                height: `320px`,
                backgroundImage: "url('/BTVN6/zozzoshop1.jpg')",
                backgroundSize: `cover`,
                backgroundPosition:`center 55%`
              }}>

      
        <div className="relative h-full container mx-auto px-10 flex flex-col justify-center items-start">
    
    {/* Tên cửa hàng: Tận dụng khoảng trống bên trái */}
    <div className="mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter italic uppercase">
        MẠNH <span className="text-stone-300">SHOP</span> {/* Đổi màu 'Shop' sang tông sepia */}
      </h1>
      <div className="h-1.5 w-32 bg-stone-100 mt-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
    </div>

    {/* Nút bấm: Đặt ở vị trí thoáng và custom lại màu sắc */}
    <Link href="/BTVN_6/add">
      <button className="group relative flex items-center gap-3 bg-stone-900/60 backdrop-blur-md border border-stone-700 hover:bg-white hover:text-stone-950 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl active:scale-95">
        <span className="bg-white p-1 rounded-lg transition-colors group-hover:bg-stone-950 group-hover:text-white text-stone-950">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </span>
        THÊM SẢN PHẨM MỚI
      </button>
    </Link>
  </div>
      </header>
      

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-x1 flex flex-col transition-all duration-300"
          >
            {/* group (gom nhóm) rounded-2xl (bo góc lớn) shadow ( đổ bóng) transition( chuyển trạng thái) */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-6">
              <img
                src={p.image}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              {/* hover:khi chuyển trạng thái */}
              <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-[-10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                {/* absolute- đi cùng relative (vị trí tuyệt đối) backdrop-blur-md (làm mờ) tracking-wider ( tăng khoảng cách chữ cái ) */}

                {p.category}
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-gray-800 text-lg line-clamp-2 h-14 mb-1 group-hover:text-blue-600 transition-colors">
                {/* line-clamp để tiêu đề không bị quá dài làm lệch card */}
                {p.title}
              </h3>
            </div>
            <div className="flex items-center gap-1 mb-3 text-sm text-yellow-500">
              <p>
                <i className="bx bx-star"></i>
                <span className="text-gray-600 font-medium">
                  {p.rating?.rate}
                </span>
                <span className="text-gray-400 text-xs">
                  ({p.rating.count} đánh giá)
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center mt-auto">
              <p className="text-2xl font-black text-blue-600">{p.price}$</p>
            </div>

            <Link href={`/BTVN_6/product/${p.id}`}>
              <button className="bg-green-600 hover:bg-green-900 text-white p-2.5 rounded-xl transition-all shadow-lg activate:scale-95">
                Chi tiết sản phẩm
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
