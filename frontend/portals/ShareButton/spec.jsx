import React from 'react';
import { mount } from 'enzyme';
import ShareButton from './index';

jest.mock('../../components/ShareButton', () => () => <div>ShareButton</div>);

describe('ShareButton', () => {
  it('should render ShareButton', () => {
    const component = mount(<ShareButton iOSTheme={false} />);
    expect(component).toMatchSnapshot();
  });
});
