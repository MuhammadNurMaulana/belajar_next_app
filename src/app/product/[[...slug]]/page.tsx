import Image from "next/image";
import Link from "next/link";

interface SlugProps {
  params: {
    slug: string[];
  };
}

// fetching lewat api luar
// async function getDataFakeStore() {
//   const res = await fetch("https://fakestoreapi.com/products");

//   if (!res.ok) {
//     throw new Error("Failed to data fetch");
//   }

//   return res.json();
// }

// fetching dengan next api local
async function getDataFakeStore() {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache",
    next: {
      // revalidate manual
      tags: ["products"],
      // revalidate
      // revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to data fetch");
  }

  return res.json();
}

export default async function ProductSlug({ params }: SlugProps) {
  const products = await getDataFakeStore();

  return (
    <div>
      <h1>{params.slug ? "Detail Product" : "Product Page"}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="/">
                <Image className="p-8 rounded-t-lg h-72 object-cover" width={400} height={200} src={product.image} alt="product image" />
              </Link>
              <div className="px-5 pb-5">
                <Link href="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate my-4">{product.title}</h5>
                </Link>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                  <Link
                    href="/"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {params.slug && (
        <>
          <h1>Nama Product semua: {params.slug}</h1>
          <h1>Nama Product 1: {params.slug[0]}</h1>
          <h1>Nama Product 2: {params.slug[1]}</h1>
          <h1>Nama Product 3: {params.slug[2]}</h1>
        </>
      )}
    </div>
  );
}
