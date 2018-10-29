import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

const mockedConfig = {
  gmdIcon: 'gmd',
  iOSIcon: 'ios',
};

jest.mock('../../helpers/getConfig', () => () => mockedConfig);

const mockedParams = {
  mockedShareParams: {
    title: 'title',
    imageURL: 'imageURL',
    deepLink: 'deepLink',
  },
};

jest.mock('../../selector', () => ({
  getShareParams: () => mockedParams.mockedShareParams,
}));

/**
 * Mocked function for shareItem
 * @param {Object} mockedShareParams mocked parameters
 */
const mockedShareItem = () => {
  jest.fn();
};

jest.mock('@shopgate/pwa-core/commands/shareItem', () => ({
  shareItem: () => mockedShareItem,
}));

describe('ShareButton', () => {
  // eslint-disable-next-line global-require
  const ShareButton = require('./index').default;
  // eslint-disable-next-line require-jsdoc
  const makeComponent = () => mount((
    <Provider store={configureStore()({})}>
      <ShareButton />
    </Provider>
  ));

  it('should render', () => {
    const component = makeComponent();
    expect(component.find('ShareButton').props()).toMatchObject(mockedParams.mockedShareParams);
    expect(component).toMatchSnapshot();
  });
});
