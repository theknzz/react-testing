import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils"
import Button from "./Button"


describe('Button Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw warning', () => {

            const expectedProps = {
                buttonText: 'Example buttonText',
                emitEvent: () => {},
            }

            const propsError = checkProps(Button, expectedProps);

            expect(propsError).toBeUndefined();

        })

    });



    describe('Have props', () => {

        let wrapper;

        beforeEach(() => {

            const props = {
                buttonText: 'Example buttonText',
                emitEvent: () => {},
            }

            wrapper = shallow(<Button {...props} />);
        });


        it('Should render a button', () => {

            const button = findByTestAtrr(wrapper, 'buttonComponent');

            expect(button.length).toBe(1);

        })

    });

    describe('Have NO props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Button />);
        });

        it('Should NOT render', () => {

            const button = findByTestAtrr(wrapper, 'buttonComponent');

            expect(button.length).toBe(0);

        });

    });




});