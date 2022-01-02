// Creating dynamic product paths (URL Links) we use getStaticPaths. Makes the site super fast by pre-rendering pages
// Visit https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation for details.

import ProductPageContent from '../../components/ProductPageContent'
import { getAllProducts, getProduct } from '../../lib/shopify'

export default function ProductPage ({ product }) {
    return (
        <div className="min-h-screen py-12 sm:pt-20">
            <ProductPageContent product={product} />
        </div>
    )
}

// Creates Dynamic URLS
export async function getStaticPaths() {
    const products = await getAllProducts()

    const paths = products.map(item => {
        const product = String(item.node.handle)

        return {
            params: { product }
        }
    })

    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
      const product = await getProduct(params.product)

      return {
          props: {
              product
          }
      }
  }