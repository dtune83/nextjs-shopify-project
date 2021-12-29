const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

// The API version 2021-10 is found on the Shopify graphQL App inside of the medright shopify apps under API version
async function ShopifyData(query) {
    const URL = `https://${domain}/api/2021-10/graphql.json`

    // This info comes from https://shopify.dev/api/storefront/getting-started
    const options = {
        endpoint: URL,
        method: "POST",
        headers:  {
            "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
    }

    try {
        const data = await fetch(URL, opitons).then(response => {
            return response.json()
        })
    
      return data        
    } catch (error) {
      throw new Error("Products not fetched")
    }
}

// info between `` comes from graphiql app inside shopify apps
export async function getProductsInCollection() {
    const query = `
    {
        collection(handle: "frontpage") {
            title
            products(first: 25) {
                edges {
                    node {
                    id
                    title
                    handle
                        images(first: 5) {
                            edges {
                                node {
                                    originalSrc
                                    altText
                                }
                            }
                        }
                    }
                }
            }
        }
    }`

    const response = await ShopifyData(query)

    const allProducts = response.data.collection.products.edges ? response.data.collection.products.edges : []
    
    return allProducts
}