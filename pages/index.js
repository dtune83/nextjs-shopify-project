import Hero from '../components/Hero'
import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'

export default function Home({ products }) {

  return (
    <>
      <div>
        <Head>
          <html lang="en" />
          <title>#####PUT TITLE HERE#####</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          <meta name="description" content="#######PUT TITLE DESCRIPTION TOO#######" />
          <meta property="og:title" content="#######PUT TITLE HERE TOO#######" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.###PUT_SITE_HERE###.com" />
          <meta property="og:image" content="https://www.###PUT_SITE_HERE###.com/share.png" />{/* put a screenshot/image here for placeholder*/}
          <meta property="og:description" content="#######PUT TITLE DESCRIPTION TOO#######" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="#######PUT TITLE HERE TOO#######" />

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Hero />
          <ProductList products={products} />
      </div>
    </>
  )
}

// getStaticProps fetches data so that it's available right away and isn't fetched dynamically everytime. Webhooks will help rebuild site if new products are added.
// https://nextjs.org/docs/basic-features/data-fetching
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: { products }, // will be passed to the page component as props
  }
}



