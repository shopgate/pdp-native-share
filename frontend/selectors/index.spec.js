import { getShareParams } from './index';

describe('Selectors', () => {
  describe('getShareParams', () => {
    it('should return null if no product is available', () => {
      const result = getShareParams({ currentProduct: {} });
      expect(result).toEqual(null);
    });
    it('should return parameters for share command', () => {
      const product = {
        name: 'title',
        featuredImageUrl: 'imageURL',
        productUrl: 'deepLink',
      };
      const result = getShareParams({ currentProduct: product });
      expect(result).toEqual(product);
    });
  });
});
