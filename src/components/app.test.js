import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App />);
it("renders correctly",() => {
    expect(app).toMatchSnapshot();
})

it('find the state of Gifts',() => {

    expect(app.state().gifts).toEqual([]);
})


describe('App component', () => {
    beforeEach(() => {
        app.find('.btn-add').simulate('click');
    })
    it('updates the state of Gifts',() => {       
        expect(app.state().gifts).toEqual([{id:1}])
        expect(app.find('.gift-list').children().length).toEqual(1)

     })
     it('checks the state of gift id greater then 1',() => {

     })
   
})

it('render Gift', () => {
    // .toBe(true)
    expect(app.find('Gift').exists());
})

describe('delete gifts', () => {})
it('delete the gift from the state',() => {
  
    app.instance().giftRemove(1);
    expect(app.state().gifts).toEqual([{id:2}])
})

