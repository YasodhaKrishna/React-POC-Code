import React from 'react';
import {configure , shallow} from 'enzyme';
import {LoaderComponent} from '../components/loaderComponent';
import {mockDataProps} from '../mocks/mockData.js';
import { jssPreset } from '@material-ui/core';

const Adapter =require('enzyme-adapter-react-16');

configure({ adapter : new Adapter()});

describe('Card Data loading', () => {
    let mockData;
    beforeEach( () => {

        mockData={
            ...mockDataProps,
            loadComponentDta : jest.fn(),
        }
    });

});

it('should be defined ' , () => {
    expect(LoaderComponent).toBeDefined();
});

it('should render correctly ' , () => {
   const component= shallow(<LoaderComponent {...mockData} />);

   expect(component).toBeDefined();
});


it('On card click ', () => {

    const component= shallow(<LoaderComponent {...mockData} />);
    expect(component).toBeDefined();
    const cardView=component.find(Card);
    component.render();

})
;