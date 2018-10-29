import React from 'react';
import { mount } from 'enzyme';

// eslint-disable-next-line require-jsdoc
const MockedShareButton = () => (<div>ShareButton</div>);
jest.mock('../../components/ShareButton', () => MockedShareButton);

describe('ShareButton', () => {
  // eslint-disable-next-line global-require
  const ShareButton = require('./index').default;
  it('should render ShareButton', () => {
    const component = mount(<ShareButton />);
    expect(component.find(MockedShareButton).exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
