import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift.js';


const mockRemove = jest.fn();
const id = 1;
const props = {gift:{id},giftRemove:mockRemove};
let app = shallow(<Gift {...props}/>)
it('renders correctly',() => {
    expect(app).toMatchSnapshot();
})

it('checks the state of Gift', () => {
    expect(app.state()).toEqual({person:'',present:''})
})
it('checks the updated state of Person and present', () => {
    app.find('.txt-person').simulate('change',{
        target:{value:'ramzan'}
    })
    expect(app.state().person).toEqual('ramzan')
})

describe('while typing in the input present', () => {
    beforeEach(() => {
        app.find('.txt-present').simulate('change', {
            target: {value:'car'}
        })
    })

    it('updates the input persons state',() => {
        expect(app.state().present).toEqual('car')
    })
})
it('checks the call back has been called once',() =>{
    app.find('.btn-remove').simulate('click');
    expect(mockRemove).toHaveBeenCalledWith(1)
})