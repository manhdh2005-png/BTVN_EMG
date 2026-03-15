const products = ["Táo", "Chuối", "Cam"];

export default function Home() {
  return (
    <div className="bg-white w-l h-screen">
      <ul className="list-disc ml-8">
        {products.map((p) => (
          <li className="text-3xl font-bold text-red-700" key={p}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
