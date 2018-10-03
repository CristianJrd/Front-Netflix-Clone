import React from 'react';
import { shallow } from 'enzyme'
import Movie from './movie'

describe("Movie", () => {
    const movieObject = {
        "poster": "www.google.com",
        "title": "La pelicula test",
        "id": "ASFJAGLSKANSKFAJKAD"
    }

    const component = shallow(<Movie title={movieObject.title}
            poster={movieObject.poster} 
            id={movieObject.id} 
        />)
        
    it("Check it props passed correctly", () => {
        expect(component.find(".card-title").text()).toBe(movieObject.title)
    })

    it("Check movie renders fine", () => {
        expect(component).toMatchSnapshot()
    })
})