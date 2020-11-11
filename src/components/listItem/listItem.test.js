import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils"
import ListItem from "./ListItem";

describe('LisItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {

            const expectedProps = {
                title: "Example title",
                desc: "Example desc",
            }

            const propsError = checkProps(ListItem, expectedProps);

            expect(propsError).toBeUndefined();

        })

    });


    describe('Component should render', () => {

        let wrapper;

        beforeEach(() => {
            const props = {
                title: "Example Title",
                desc: "Example desc",
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should render without errors', () => {

            const component = findByTestAtrr(wrapper, 'listItemComponent');

            expect(component.length).toBe(1);

        });

        it('Should render a titlte', () => {

            const title = findByTestAtrr(wrapper, 'componentTitle');

            expect(title.length).toBe(1);

        });

        it('Should render a desc', () => {

            const desc = findByTestAtrr(wrapper, 'componentDesc');

            expect(desc.length).toBe(1);

        });

    });


    describe('Component should NOT render', () => {

        let wrapper;

        beforeEach(() => {

            wrapper = shallow(<ListItem />);

        });

        it('Component is not rendered', () => {

            const component = findByTestAtrr(wrapper, 'listItemComponent');

            expect(component.length).toBe(0);

        })

    })

});