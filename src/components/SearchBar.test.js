import {fireEvent, render, screen} from "@testing-library/react";
import SearchBar from "./SearchBar";


describe('<SearchBar>', ()=>{
    test('should call props search function when submitting', () =>{
        const mockSearchFn = jest.fn()
        render(<SearchBar onSearch={mockSearchFn}/>)
        const form = screen.getByLabelText('search-bar')
        const input = screen.getByLabelText('search-input')
        const searchTerm = "pizza"
        fireEvent.change(input, {target: {value: searchTerm}})
        fireEvent.submit(form)
        expect(mockSearchFn).toHaveBeenCalledTimes(1)
        expect(mockSearchFn).toBeCalledWith(searchTerm)
    })
})