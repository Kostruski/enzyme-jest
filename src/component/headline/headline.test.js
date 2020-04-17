import Headline from './';


import { findByTestAtrr, setUp, propTypesCheck } from '../../../Utils';

describe('Headline component', () => {
  describe('with props', () => {
    const props = { texts: { title: 'Posts', desc: 'Click button to render posts' } };
    const component = setUp(Headline, props);
    const wrapper = findByTestAtrr(component, 'title');
    test('should render title with props', () => {
      expect(wrapper.length).toBe(1);
    });
  });

  describe('no props', () => {
    const component = setUp(Headline);
    const wrapper = findByTestAtrr(component, 'title');
    test('should not render title without props', () => {
      expect(wrapper.length).toBe(0);
    });
  });

  describe('check prop-types', () => {
    test('prop types should match', () => {
      const expectedProps = {
        texts: {
          title: 'test',
          desc: 'test',
        },
      };

      const warning = propTypesCheck(Headline, expectedProps )
      expect(warning).toBeUndefined();
    });
  });
});
