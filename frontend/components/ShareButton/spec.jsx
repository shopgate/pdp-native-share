import React from 'react';
import { shallow } from 'enzyme';
import ShareButton from './index';

describe('ShareButton component', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<ShareButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
