import React from 'react';
import { findByTestAtrr, setUp } from './../../../Utils';
import Header from './index';





describe('Header Component', () => {

    let component;
    beforeEach(() => { component = setUp(Header); });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAtrr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});
