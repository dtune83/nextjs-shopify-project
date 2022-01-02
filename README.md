# Ecomm Template Built on Next.js/React.js + Tailwind.css

This ecommerce build uses [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## To Deploy Locally

- create list in githuib readme Pull down a version of the code from github
- In terminal ```npm run dev```
- if .gitignore isn't "ignoring" run this line in VS Code ```git rm -r --cached . && git add . && git commit -am "Remove ignored files"```


## Shopify Connectivity
Shopify store API is used to connect a client's shopify store to this custom Next.js ecomm template. The Shopify site is/will be transfered over to client upon launch and will be managed and maintained by their team/contractors.

### Quick Setup Details for Shopify & Next.js
- Go to [Shopify Partners](https://www.shopify.com/partners) page and login. Go to client's page or create a new dev site which will later be transfered to client.
- Go to ```Stores``` and click ```login```
- Go to ```Apps``` --> ```Private Apps``` --> ```Creat New Private App```
- Once finished you'll take select the ```StoreFront API``` then grab the ```Storefront Access Token```
- Copy the token to the **SHOPIFY_STOREFRONT_ACCESSSTOKEN** inside the .env.local file inside your project.
- Also place the **SHOPIFY_STORE_DOMAIN** in the same env.local folder which can be found in the URL of the newly created shopify account in your browser. Just grab the ***SITENAME.SHOPIFY.COM*** portion of the URL


## Site Live Test Using Vercel
When running on Vercel be sure to set the Environmental Variables (there are two in this case)
- go the the ```.env.local``` file
- grab the **SHOPIFY_STORE_DOMAIN** and it's value
- grab the **SHOPIFY_STOREFRONT_ACCESSSTOKEN** and it's value

[Vercel-MedRight](https://vercel.com/medright-cbdg/medright-nextjs-shopify/2niP91LkriRGmEzMv2HRbdcghDDV)

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


## Tool List Used In This Template (found in package.json file)
- headlessui
- heroicons
- react-icons *(more comprehensive lists of icons)*
- sass
- swiper
- next
- react
- react-dom

## Helpful Notes & Walkthrough for this Ecomm Template

[Paid Video Class](https://www.workingwithshopify.com/courses/take/shopify-next-js-tailwind-css-modern-ecommerce/lessons/27514239-21-seo-for-next-js-and-ecommerce/discussions/3744356)

[Link to Repo](https://github.com/iskurbanov/shopify-next.js-tailwind)
(there maybe updates to this repo so be sure to check it an upgrade any dependencies/libraries if time has passed)
