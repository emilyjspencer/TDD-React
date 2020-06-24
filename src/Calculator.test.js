import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {

  it('should render a <div />', () => {
      const wrapper = shallow(<Calculator />);
      expect(wrapper.find('div').length).toEqual(1)
  });
});