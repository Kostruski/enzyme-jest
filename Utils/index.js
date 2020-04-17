import React from 'react';
import { shallow, debug } from 'enzyme';
import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, atrr) => {
  const wrapper = component.find(`[data-test='${atrr}']`);
  return wrapper;
};

export const setUp = (Component, props = {}) => {
  const renderedComponent = shallow(<Component {...props} />);
  return renderedComponent;
};

export const propTypesCheck = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
};
