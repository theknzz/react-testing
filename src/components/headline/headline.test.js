/**
 * @fileOverview file responsible for testing the Headline component
 * @author Joaquim Santos
 * @description this file could also be called spec.js
 */

import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestAtrr } from "../../../utils";
import { checkProps } from "../../../utils"

const setup = (props = {}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw warning', () => {

            const expectedProps = {
                header: "Test Header",
                desc: "Test Desc",
                tempArr: [{
                    fName: "Test fName",
                    lName: "Test lName",
                    email: "test@email.com",
                    age: 23,
                    onlineStatus: false,
                }]
            }

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Have props', () => {

        let wrapper;

        beforeEach(() => {

           const props = {
               header: "Test Header",
               desc: "Test Desc",
           }

           wrapper = setup(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, "headlineComponent");
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, "header");
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, "desc");
            expect(desc.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let wrapper;

        beforeEach(() => {

            wrapper = setup();

        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, "headlineComponent");
            expect(component.length).toBe(0);
        })

    });
});