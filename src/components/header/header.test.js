/**
 * @fileOverview file responsible for testing the Header component
 * @author Joaquim Santos
 * @description this file can be called spec.js
 */

import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAtrr } from "../../../utils";

const setup = (props = {}) => {
    return shallow(<Header {...props} />);
}

describe('Header component', () => {

    let component;

    beforeEach(() => {
        component = setup();
    });

    it('Should rend without errors', () => {
        const wrapper = findByTestAtrr(component, "headerComponent");
        expect(wrapper.length).toBe(1);
    });

    it('Should render a h1 logo', () => {
       const logo = findByTestAtrr(component, "logoH1");
       expect(logo.length).toBe(1);
    });
    
})