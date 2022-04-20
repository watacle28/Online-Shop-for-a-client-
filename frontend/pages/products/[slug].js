import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const ProductPage = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 mt-8">
      <Head>
        <title>{product.title}</title>
      </Head>
      
    <div class="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow">
        <div class="flex-auto w-1/2 h-full relative">
            <NextImage media={product.image} />
        </div>
          <form class="flex-auto p-6">
              <div class="flex flex-wrap">
                  <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">
                      {product.title}
                  </h1>
                  <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
                      R{product.price}
                  </div>
                  <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                      {product.description}
                  </div>
                  <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                      In stock
                  </div>
              </div>
              <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
              {product.sizes.length > 0 &&
                        <div class="flex-auto text-lg font-semibold dark:text-gray-50 mr-auto">Sizes</div>}
              <div class="space-x-2 flex justify-between">
                      
                          {product.sizes.map((size) => (
                              <label class="text-center">
                              <input type="radio" class="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg" name="size" value="xs"/>
                                  {size.size}
                              </label>
                          ))}   
              </div>
                                  </div>
                                  <div class="flex mb-4 text-sm font-medium">
                                      {product.status === "published" ? (
                <button
                  className="snipcart-add-item py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-url={router.asPath}
                  data-item-description={product.description}
                  data-item-image={getStrapiMedia(
                    product.image.formats.thumbnail.url
                  )}
                  data-item-name={product.title}
                  v-bind="customFields"
                >
                  Add to cart
                </button>
              ) : (
                <div className="text-center mr-10 mb-1" v-else>
                  <div
                    className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                  >
                    <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                      Coming soon...
                    </span>
                    <span className="font-semibold mr-2 text-left flex-auto">
                      This article is not available yet.
                    </span>
                  </div>
                </div>
              )}
                </div>
          </form>
        </div>
    </div>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}
