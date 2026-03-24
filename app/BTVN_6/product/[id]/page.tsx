type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return <div> Product not found </div>;
  }

  const product = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Khung sản phẩm cột trái */}
        <div className="bg-gray-50 round-3xl p-8 flex justify-center items-center border border-gray-100 shadow-inner">
          {/* shadow-inner (làm phần tử lõm xuống) */}
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* thông tin chi tiết cột phải */}
        <div className="flex flex-col">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl font-black text-gray-900 leading-tight mb-4">
            {product.title}
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span className="text-gray-500 text-sm">(4.5/5 ratings)</span>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-2xl mb-6">
          <p className="text-4xl font-black text-red-600">${product.price}</p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2">
            Mô tả sản phẩm
          </h3>
          <p className="text-gray-600 leading-relaxed italic">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
