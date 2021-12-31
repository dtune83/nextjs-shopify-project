"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/shopify.js":
/*!************************!*\
  !*** ./lib/shopify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsInCollection\": () => (/* binding */ getProductsInCollection)\n/* harmony export */ });\nconst domain = process.env.SHOPIFY_STORE_DOMAIN;\nconst storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;\n// The API version 2021-10 is found on the Shopify graphQL App inside of the medright shopify apps under API version\nasync function ShopifyData(query) {\n    const URL = `https://${domain}/api/2021-10/graphql.json`;\n    // This info comes from https://shopify.dev/api/storefront/getting-started\n    const options = {\n        endpoint: URL,\n        method: \"POST\",\n        headers: {\n            \"X-Shopify-Storefront-Access-Token\": storefrontAccessToken,\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query\n        })\n    };\n    try {\n        const data = await fetch(URL, options).then((response)=>{\n            return response.json();\n        });\n        return data;\n    } catch (error) {\n        throw new Error(\"Products not fetched\");\n    }\n}\n// info between `` comes from graphiql app inside shopify apps\nasync function getProductsInCollection() {\n    const query = `\n    {\n        collection(handle: \"frontpage\") {\n            title\n            products(first: 25) {\n                edges {\n                    node {\n                    id\n                    title\n                    handle\n                        images(first: 5) {\n                            edges {\n                                node {\n                                    originalSrc\n                                    altText\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }`;\n    const response = await ShopifyData(query);\n    const allProducts = response.data.collection.products.edges ? response.data.collection.products.edges : [];\n    return allProducts;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2hvcGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxvQkFBb0I7QUFDL0MsS0FBSyxDQUFDQyxxQkFBcUIsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLDhCQUE4QjtBQUV4RSxFQUFvSDtlQUNyR0MsV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixLQUFLLENBQUNDLEdBQUcsSUFBSSxRQUFRLEVBQUVSLE1BQU0sQ0FBQyx5QkFBeUI7SUFFdkQsRUFBMEU7SUFDMUUsS0FBSyxDQUFDUyxPQUFPLEdBQUcsQ0FBQztRQUNiQyxRQUFRLEVBQUVGLEdBQUc7UUFDYkcsTUFBTSxFQUFFLENBQU07UUFDZEMsT0FBTyxFQUFHLENBQUM7WUFDUCxDQUFtQyxvQ0FBRVIscUJBQXFCO1lBQzFELENBQVEsU0FBRSxDQUFrQjtZQUM1QixDQUFjLGVBQUUsQ0FBa0I7UUFDdEMsQ0FBQztRQUNEUyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7WUFBQ1IsS0FBSztRQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFDO1FBQ0QsS0FBSyxDQUFDUyxJQUFJLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUNULEdBQUcsRUFBRUMsT0FBTyxFQUFFUyxJQUFJLEVBQUNDLFFBQVEsR0FBSSxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0EsUUFBUSxDQUFDQyxJQUFJO1FBQ3hCLENBQUM7UUFFSCxNQUFNLENBQUNKLElBQUk7SUFDYixDQUFDLENBQUMsS0FBSyxFQUFFSyxLQUFLLEVBQUUsQ0FBQztRQUNmLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFzQjtJQUN4QyxDQUFDO0FBQ0wsQ0FBQztBQUVELEVBQThEO0FBQ3ZELGVBQWVDLHVCQUF1QixHQUFHLENBQUM7SUFDN0MsS0FBSyxDQUFDaEIsS0FBSyxJQUFJO0lBd0JmO0lBRUEsS0FBSyxDQUFDaUIsV0FBVyxHQUFHTCxRQUFRLENBQUNILElBQUksQ0FBQ1M7SUFFbEMsTUFBTSxDQUFDRDtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS5qcz9lZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVfRE9NQUlOXG5jb25zdCBzdG9yZWZyb250QWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQUNDRVNTVE9LRU5cblxuLy8gVGhlIEFQSSB2ZXJzaW9uIDIwMjEtMTAgaXMgZm91bmQgb24gdGhlIFNob3BpZnkgZ3JhcGhRTCBBcHAgaW5zaWRlIG9mIHRoZSBtZWRyaWdodCBzaG9waWZ5IGFwcHMgdW5kZXIgQVBJIHZlcnNpb25cbmFzeW5jIGZ1bmN0aW9uIFNob3BpZnlEYXRhKHF1ZXJ5KSB7XG4gICAgY29uc3QgVVJMID0gYGh0dHBzOi8vJHtkb21haW59L2FwaS8yMDIxLTEwL2dyYXBocWwuanNvbmBcblxuICAgIC8vIFRoaXMgaW5mbyBjb21lcyBmcm9tIGh0dHBzOi8vc2hvcGlmeS5kZXYvYXBpL3N0b3JlZnJvbnQvZ2V0dGluZy1zdGFydGVkXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZW5kcG9pbnQ6IFVSTCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogIHtcbiAgICAgICAgICAgIFwiWC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2VuXCI6IHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnkgfSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goVVJMLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSlcbiAgICBcbiAgICAgIHJldHVybiBkYXRhICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdHMgbm90IGZldGNoZWRcIilcbiAgICB9XG59XG5cbi8vIGluZm8gYmV0d2VlbiBgYCBjb21lcyBmcm9tIGdyYXBoaXFsIGFwcCBpbnNpZGUgc2hvcGlmeSBhcHBzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24oKSB7XG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAge1xuICAgICAgICBjb2xsZWN0aW9uKGhhbmRsZTogXCJmcm9udHBhZ2VcIikge1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHByb2R1Y3RzKGZpcnN0OiAyNSkge1xuICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9YFxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTaG9waWZ5RGF0YShxdWVyeSlcblxuICAgIGNvbnN0IGFsbFByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9uLnByb2R1Y3RzLmVkZ2VzID8gcmVzcG9uc2UuZGF0YS5jb2xsZWN0aW9uLnByb2R1Y3RzLmVkZ2VzIDogW11cbiAgICBcbiAgICByZXR1cm4gYWxsUHJvZHVjdHNcbn0iXSwibmFtZXMiOlsiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIlNIT1BJRllfU1RPUkVfRE9NQUlOIiwic3RvcmVmcm9udEFjY2Vzc1Rva2VuIiwiU0hPUElGWV9TVE9SRUZST05UX0FDQ0VTU1RPS0VOIiwiU2hvcGlmeURhdGEiLCJxdWVyeSIsIlVSTCIsIm9wdGlvbnMiLCJlbmRwb2ludCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsIkVycm9yIiwiZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24iLCJhbGxQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJwcm9kdWN0cyIsImVkZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/shopify.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/shopify */ \"./lib/shopify.js\");\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"Hello sir!\"\n    }));\n};\n// getStaticProps fetches data so that it's available right away and isn't fetched dynamically everytime. Webhooks will help rebuild site if new products are added.\n// https://nextjs.org/docs/basic-features/data-fetching\n// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation\nasync function getStaticProps() {\n    const products = await (0,_lib_shopify__WEBPACK_IMPORTED_MODULE_2__.getProductsInCollection)();\n    return {\n        props: {\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QjtBQUM0QjtBQUV6QyxRQUFRLENBQUNFLElBQUksR0FBRyxDQUFDO0lBQzlCLE1BQU07a0JBQ0YsQ0FFRjs7QUFFSixDQUFDO0FBRUQsRUFBb0s7QUFDcEssRUFBdUQ7QUFDdkQsRUFBd0Y7QUFFakYsZUFBZUMsY0FBYyxHQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDSCxxRUFBdUI7SUFDOUMsTUFBTSxDQUFDLENBQUM7UUFDTkksS0FBSyxFQUFFLENBQUM7UUFBQSxDQUFDO0lBQ1gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGdldFByb2R1Y3RzSW5Db2xsZWN0aW9uIH0gZnJvbSAnLi4vbGliL3Nob3BpZnknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIEhlbGxvIHNpciFcbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBnZXRTdGF0aWNQcm9wcyBmZXRjaGVzIGRhdGEgc28gdGhhdCBpdCdzIGF2YWlsYWJsZSByaWdodCBhd2F5IGFuZCBpc24ndCBmZXRjaGVkIGR5bmFtaWNhbGx5IGV2ZXJ5dGltZS4gV2ViaG9va3Mgd2lsbCBoZWxwIHJlYnVpbGQgc2l0ZSBpZiBuZXcgcHJvZHVjdHMgYXJlIGFkZGVkLlxuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZ1xuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZyNnZXRzdGF0aWNwcm9wcy1zdGF0aWMtZ2VuZXJhdGlvblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24oKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiZ2V0UHJvZHVjdHNJbkNvbGxlY3Rpb24iLCJIb21lIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9kdWN0cyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();