"use client"
import { Product } from "@/types/product";
import Image from "next/image"
import Link from "next/link";
import { ImageLoaderProps } from "next/image";

function ProductCard({p} : {p : Product}){

  const imageLoader = ({ src, width, quality } : ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
  <div
            key={p.id}
            className="group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-xl flex flex-col transition-all duration-300"
          >
            {/* group (gom nhóm) rounded-2xl (bo góc lớn) shadow ( đổ bóng) transition( chuyển trạng thái) */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-6">
              <Image
                loader={imageLoader}
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              {/* hover:khi chuyển trạng thái */}
              <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-[-10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                {/* absolute- đi cùng relative (vị trí tuyệt đối) backdrop-blur-md (làm mờ) tracking-wider ( tăng khoảng cách chữ cái ) */}

                {p.category}
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-gray-800 text-lg line-clamp-2 h-14 mb-1 group-hover:text-blue-600 transition-colors font-unifrakturMaguntia">
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

            <Link href={`/ManhShop/product/${p.id}`}>
              <button className="bg-green-600 hover:bg-green-900 text-white p-2.5 rounded-xl transition-all shadow-lg active:scale-95">
                Chi tiết sản phẩm
              </button>
            </Link>
          </div>
)}

export default ProductCard