import App from "./App"
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../utils";
import React from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    return shallow(<App store={store}/>).childAt(0).dive();
}

describe('App Component', () => {

    let wrapper;

    beforeEach(() => {

        const initialState = {
            posts: [{
                title: 'Example title',
                body: 'Some text',
            },{
                title: 'Example title',
                body: 'Some text',
            },{
                title: 'Example title',
                body: 'Some text',
            },{
                title: 'Example title',
                body: 'Some text',
            },]
        }

        wrapper = setUp(initialState);

    });


    it('Should render without errors', () => {

        const component = findByTestAtrr(wrapper, 'appComponent');

        expect(component.length).toBe(1);

    });

    it('exampleMethod_updatesState Method should update as expected', () => {

        const instance = wrapper.instance();

        instance.exampleMethod_updatesState();

        const newState = instance.state.hideBtn;

        expect(newState).toBe(true);
    });

    it('exampleMethod_returnsAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);
    });

});