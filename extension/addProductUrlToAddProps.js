/**
 * @param {Object} context
 * @param {Object} input
 * @return {Promise.<{collection}>}
 */
module.exports = async (context, input) => ({
  products: input.products.map(
    product => ({
      ...product,
      additionalProperties: {
        ...product.additionalProperties,
        productUrl: product.productUrl ? product.productUrl : null
      }
    }))
})
