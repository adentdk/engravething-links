import Image from "next/image"
import { getSelectedProducts } from "~/app/actions"

export default async function Page() {
  const products = await getSelectedProducts()
  return (
    <section id="selected-product" className="relative py-16 bg-gradient-to-b from-black/90 backdrop-blur-sm via-gray-800 to-gray-700">
      <div className="container mx-auto">

        <h1 className="font-bold text-2xl text-center text-white drop-shadow-lg shadow-slate-500 mb-4">Produk Pilihan</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
          {products.map((product, productIndex) => (
            <div className="card card-compact shadow-xl bg-base-200" key={'product' + productIndex}>
              <figure className="">
                <Image width={200} height={200} className="object-cover" src={product.images[0]} alt={product.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title drop-shadow-md shadow-slate-500">{product.title}</h2>
                <p className="drop-shadow-md shadow-slate-500">{product.shortDescription}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost">Beli sekarang</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}