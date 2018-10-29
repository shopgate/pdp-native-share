import { createSelector } from 'reselect';
import { getCurrentProduct } from '@shopgate/pwa-common-commerce/product/selectors/product';
/**
 * Params for share button
 * @return {Array}
 */
export const getShareParams = createSelector(getCurrentProduct, (currentProduct) => {
  if (currentProduct) {
    const shareParams = {
      title: currentProduct.name,
      imageURL: currentProduct.featuredImageUrl,
      deepLink: currentProduct.productUrl,
    };
    return shareParams;
  }
  return null;
});
