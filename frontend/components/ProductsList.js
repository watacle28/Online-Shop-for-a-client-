import NextImage from "./Image"
import Link from "next/link"

const ProductsList = ({ products }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="w-full bg-white">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={_product.image} />
                </div>
              </div>
              <form class="flex-auto p-6">
        <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
            {_product.title}
            </h1>
            <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
            R{_product.price}
            </div>
            {/* <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
            {_product.description}
            </div> */}
        </div>
        <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                  </div>
                  <div class="flex mb-4 text-sm font-medium">
                      <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                          View product
                      </button>
                  </div>
            </form>
              
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
