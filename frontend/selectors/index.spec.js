import { getShareParams } from './index';

describe('Selectors', () => {
  describe('getShareParams', () => {
    it('should return null when product Id not found', () => {
      const state = {
        product: {
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
          productsById: {
            foo: {
              productData: {
                name: 'Name',
                featuredImageUrl: 'https://example.com/image',
                productUrl: 'https://example.com',
              },
            },
          },
        },
      };
      const result = getShareParams(state, { productId: 'foo' });
      expect(result).toEqual({
        deepLink: 'https://example.com',
        imageURL: 'https://example.com/image',
        title: 'Name',
      });
    });

    it('should return sanitized imageURL', () => {
      const state = {
        product: {
          productsById: {
            foo: {
              productData: {
                name: 'Name',
                featuredImageUrl: 'https://img-cdn.shopgate.com',
                productUrl: 'https://example.com',
              },
            },
          },
        },
      };
      const result = getShareParams(state, { productId: 'foo' });
      expect(result.imageURL.includes('w=')).toBe(true);
      expect(result.imageURL.includes('h=')).toBe(true);
    });
  });
});
