import { getSelectedProducts } from "~/app/actions"
import ProductCard from "~/components/common/product-card"

export const revalidate = 600

export default async function Page() {
  const products = await getSelectedProducts()
  return (
    <section id="selected-product" className="relative py-16 bg-gradient-to-b from-black/90 backdrop-blur-sm via-gray-800 to-gray-700">
      <div className="container mx-auto">

        <h1 className="font-bold text-2xl text-center text-white drop-shadow-lg shadow-slate-500 mb-4">Produk Pilihan</h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 px-2 sm:px-0">
          {products.map((product, productIndex) => (
            <ProductCard {...product} key={'product' + productIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}