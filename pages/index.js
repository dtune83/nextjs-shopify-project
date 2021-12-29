import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'

export default function Home() {
  return (
    <>
      Hello sir!
    </>
  )
}

// getStaticProps fetches data so that it's available right away and isn't fetched dynamically everytime. Webhooks will help rebuild site if new products are added.
// https://nextjs.org/docs/basic-features/data-fetching
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: {}, // will be passed to the page component as props
  }
}



