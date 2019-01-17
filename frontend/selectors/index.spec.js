import { getShareParams } from './index';

describe('Selectors', () => {
  describe('getShareParams', () => {
    it('should return null when product Id not found', () => {
      const state = {
        product: {
          currentProduct: {
            productId: 'bar',
          },
          productsById: {
            foo: {
              productData: {
                name: 'title',
                featuredImageUrl: 'imageURL',
                productUrl: 'deeplink',
              },
            },
          },
        },
      };
      const result = getShareParams(state, {});
      expect(result).toEqual(null);
    });
    it('should return parameters for share command', () => {
      const state = {
        product: {
          currentProduct: {
            productId: 'foo',
          },
          productsById: {
            foo: {
              productData: {
                name: undefined,
                featuredImageUrl: undefined,
                productUrl: undefined,
              },
            },
          },
        },
      };
      const result = getShareParams(state, { productId: 'foo' });
      expect(result).toEqual(state.product.productsById.foo.productData);
    });
  });
});
