import { createSelector } from 'reselect';
import { getCurrentProduct } from '@shopgate/pwa-common-commerce/product/selectors/product';
/**
 * Returns dummies
 * @return {Array}
 */
export const getShareParams = createSelector([getCurrentProduct], (currentProduct) => {
  if (currentProduct) {
    const shareParams = {
      title: currentProduct.name,
      imageUrl: currentProduct.featuredImageUrl,
      deepLink: currentProduct.additionalProperties.productUrl,
    };
    return shareParams;
  }
  return null;
});
