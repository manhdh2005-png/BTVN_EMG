import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  
     // Tạo một mảng giả gồm 6 phần tử để hiển thị 6 ô loading
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="p-10 min-h-screen bg-stone-50">
      
      <div className="mb-10 w-full h-[320px] rounded-2xl bg-stone-200 animate-pulse flex items-center justify-center">
        <Skeleton className="h-12 w-64 bg-stone-300" />
      </div>

      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {skeletonCards.map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-5 p-6 rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            {/* Phần ảnh sản phẩm giả lập */}
            <Skeleton className="h-60 w-full rounded-xl bg-stone-200 shadow-inner" />
            
            <div className="space-y-3">
              {/* Dòng tên sản phẩm */}
              <Skeleton className="h-6 w-3/4 bg-stone-200" />
              {/* Dòng mô tả ngắn */}
              <Skeleton className="h-4 w-full bg-stone-100" />
              <Skeleton className="h-4 w-5/6 bg-stone-100" />
            </div>

            <div className="flex justify-between items-center mt-2">
              {/* Giá tiền */}
              <Skeleton className="h-8 w-20 bg-stone-200" />
              {/* Nút bấm */}
              <Skeleton className="h-10 w-28 rounded-lg bg-stone-900/20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default loading
