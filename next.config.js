// This is connecting to the env.local which is pulling in the specific shop api
module.exports= {
    env: {
        SHOPIFY_STORE_DOMAIN:  process.env.SHOPIFY_STORE_DOMAIN,
        SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
    },
    // This allows next.js to process and optimize all incoming product images from shopify.
    images: {
        domains: ['cdn.shopify.com']
    }
}