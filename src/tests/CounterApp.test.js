
import React from "react";
import { shallow } from "enzyme/build"
import CounterApp from "../CounterApp"

describe('test on counter app', () => {
    
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })
    test('should match', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    
    test('should show a default value of 100', () => {
        const defaultValue = 100;
        const wrapper = shallow(<CounterApp  value={defaultValue}/>);
        
        const textWrapper =  wrapper.find("h2").text();
        
        expect(textWrapper.trim()).toBe("100");
        
    })
    
    test('should increment counter', () => {
        
        wrapper.find("button").at(0).simulate("click");
        const textWrapper =  wrapper.find("h2").text().trim();
        
        expect(textWrapper).toBe("11")
        
    })
    
    test('should decrement counter', () => {
        wrapper.find("button").at(2).simulate("click");
        const textWrapper =  wrapper.find("h2").text().trim();
        
        expect(textWrapper).toBe("9")
        
    })
    
    test('should update value with default on click reset', () => {
        const defaultValue = 100;
        const wrapper = shallow(<CounterApp  value={defaultValue}/>);
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        const textWrapper =  wrapper.find("h2").text().trim();
        
        expect(textWrapper).toBe("100");
        
    })
    
    
})
