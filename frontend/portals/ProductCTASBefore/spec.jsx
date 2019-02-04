import React from 'react';
import { mount } from 'enzyme';
import ShareButton from '../../components/ShareButton';

// eslint-disable-next-line require-jsdoc
const MockedShareButton = () => (<div>ShareButton</div>);
jest.mock('../../components/ShareButton', () => MockedShareButton);
let mockedIsIOS = true;
jest.mock('@shopgate/pwa-extension-kit', () => ({
  env: {
    isIOSTheme: () => mockedIsIOS
  }
}));

describe('IosShareButton', () => {
  // eslint-disable-next-line global-require
  const ShareButton = require('./index').default;
  it('should render ShareButton', () => {
    const component = mount(<ShareButton />);
    expect(component.find(MockedShareButton).exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should render null', () => {
    mockedIsIOS = false;
    const component = mount(<ShareButton />);
    expect(component.html()).toBe(null);
  });
});
