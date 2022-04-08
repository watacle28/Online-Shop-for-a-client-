import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Lynux Espadrilles</title>
      </Head>
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default HomePage
