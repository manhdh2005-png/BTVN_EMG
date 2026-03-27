"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormType = {
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
};

export default function Page() {
  const router = useRouter();

  const [form, setForm] = useState<FormType>({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...form,
      price: Number(form.price),
    }),
  });

  alert("Added!");
  router.push("/ManhShop/product");
};
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Thêm Sản Phẩm Mới
        </h2>
        <div className="space-y-4">
          {[
            { label: "Tiêu đề sản phẩm", key: "title", type: "text" },
            { label: "Loại", key: "category", type: "text" },
            { label: "Giá", key: "price", type: "number" },
            { label: "Mô tả", key: "description", type: "text" },
            { label: "Link ảnh (URL)", key: "image", type: "text" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.label}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                onChange={(e) =>
                  setForm({ ...form, [field.key]: e.target.value })
                }
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transform active:scale-[0.98] transition-all duration-150 mt-2"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}