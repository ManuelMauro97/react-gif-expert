import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'Rick & Morty';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

     });

     test('Debe de mostrar items cuando se cargan las imagenes desde useFetchGifs', () => { 
        
        const gifs = [
            {
            id: 'ABC',
            title: 'Rick & Morty',
            url: 'https://localhost/rick&morty.jpg'
        },
        {
            id: '123',
            title: 'The 100',
            url: 'https://localhost/the100 .jpg'
        }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);

        expect( screen.getAllByRole('img').length ).toBe(2);


      });

 });