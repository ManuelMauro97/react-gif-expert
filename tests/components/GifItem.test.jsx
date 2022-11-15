import { GifItem } from "../../src/components/GifItem"
import { render, screen } from "@testing-library/react";


describe('Prebas en <GifItem />', () => { 

    const title = 'Soy un titulo';
    const url = 'https://soyunaurl.com/hola';
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

     });

     test('Debe de mostrar la imagen con el URL y el ALt indicado', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

      });

      test('Debe de mostrar el titulo en el componente', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();


       });

 });