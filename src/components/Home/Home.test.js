import React from 'react';
import { shallow } from 'enzyme'
import Home from './home'

describe("Home", () => {
    it("Home must be render correctly", () => {
        const component = shallow(<Home />)
        expect(component).toMatchSnapshot()
    })
})