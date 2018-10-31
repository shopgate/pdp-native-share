import React from 'react';
import { mount } from 'enzyme';

// eslint-disable-next-line require-jsdoc
const MockedShareButton = () => (<div>ShareButton</div>);
jest.mock('../../components/ShareButton', () => MockedShareButton);

let mockedIsIOS = false;
jest.mock('../../helpers/isiOSTheme', () => () => mockedIsIOS);

describe('GmdShareButton', () => {
  // eslint-disable-next-line global-require
  const ShareButton = require('./index').default;
  it('should render GmdShareButton', () => {
    const component = mount(<ShareButton />);
    expect(component.find(MockedShareButton).exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should render null', () => {
    mockedIsIOS = true;
    const component = mount(<ShareButton />);
    expect(component.html()).toBe(null);
  });
});
