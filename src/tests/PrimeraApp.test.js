import React from "react";
import { shallow } from "enzyme";
import  '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";

describe('test on PrimeraApp', () => {
    // test('should show message "hola soy goku"', () => {

    //     const saludo = 'hola soy goku';

    //     const wrapper = render(<PrimeraApp saludo={saludo} />);

    //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
        

    // })

    test('should show PrimeraApp correct', () => {
        const saludo = 'hola soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show the subtitle send by props', () => {
        const saludo = 'hola soy goku';
        const subtitle = 'soy un subtitle';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitle}/>);
        
        const textoParrafo = wrapper.find("p").text();
    
        expect(textoParrafo).toBe(subtitle);
        
    })
    
    
})
