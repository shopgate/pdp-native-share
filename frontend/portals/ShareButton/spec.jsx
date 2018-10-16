import React from 'react';
import { mount } from 'enzyme';
import ShareButton from './index';

// eslint-disable-next-line require-jsdoc, react/prop-types
const MockedShareButton = props => (<div>{props.children}</div>);

let mockedIsiOSTheme = false;
jest.mock('../../helpers/isiOSTheme', () => () => mockedIsiOSTheme);
describe('ShareButton', () => {
  it('should render the Android ShareButton', () => {
    const component = mount(<ShareButton ShareButton={MockedShareButton} />);
    expect(component).toMatchSnapshot();
    expect(component.html()).not.toBeNull();
  });
  it('should render the iOS ShareButton', () => {
    mockedIsiOSTheme = true;
    const component = mount(<ShareButton ShareButton={MockedShareButton} />);
    expect(component).toMatchSnapshot();
    expect(component.html()).not.toBeNull();
  });
});
