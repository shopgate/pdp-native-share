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
  }
};

jest.mock('../../selectors/index', () => ({
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
  const makeComponent = (iOSTheme) => mount((
    <Provider store={configureStore()({})}>
      <ShareButton iOSTheme={iOSTheme} />
    </Provider>
  ));

  it('should render when shareParams exist', () => {
    const component = makeComponent(true);
    expect(component.find('ShareButton').props().shareParams).toMatchObject(mockedParams.mockedShareParams);
    expect(component).toMatchSnapshot();
  });
  it('should render with gmd icon', () => {
    const component = makeComponent(false);
    expect(component.find('ShareButton').props().shareParams).toMatchObject(mockedParams.mockedShareParams);
    expect(component).toMatchSnapshot();
  });
  it('should not render when deeplink is undefined', () => {
    mockedParams.mockedShareParams.deepLink = undefined;
    const component = makeComponent(true);
    expect(component.html()).toBe(null);
  });
});
