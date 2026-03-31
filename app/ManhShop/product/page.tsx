import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { ProductsWithPagination } from "./action";
import ProductsPagination from "./ProductsPagination";

type Props ={
  searchParams: Promise<{ page?: string; limit?: string }>;
};

export default async function Page({ searchParams }: Props) {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 3;
  
  const { products, total } = await ProductsWithPagination({
    page,
    limit,
  });

  return (
    <div className="p-10">
      {/* Header */}

      <header className="relative bg-black w-full"
              style={{
                height: `320px`,
                backgroundImage: "url('/BTVN6/viemtru.jpg')",
                backgroundSize: `cover`,
                backgroundPosition:`center 20%`
              }}>

      
        <div className="relative h-full container mx-auto px-10 flex flex-col justify-center items-end">
    
    
    <div className="mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter italic uppercase font-unifrakturMaguntia">
        MẠNH <span className="text-stone-300">SHOP</span> 
      </h1>
      <div className="h-1.5 w-32 bg-stone-100 mt-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
    </div>

    
    <Link href="/ManhShop/product/add">
      <button className="group relative flex items-center gap-3 bg-stone-900/60 backdrop-blur-md border border-stone-700 hover:bg-white hover:text-stone-950 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl active:scale-95 font-unifrakturMaguntia">
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
          <ProductCard p={p} key = {p.id} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <ProductsPagination
          page={page}
          total={total}
          limit={limit}
        />
      </div>
    </div>
  );
}

