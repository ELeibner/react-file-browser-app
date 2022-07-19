import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('../components/ItemList', () => ({
    ItemList: () => <></>
}));
jest.mock('../components/Header', () => ({
    Header: () => <></>
}));

let mockData = {
    data: {
        subfolders: [],
        files: []
    },
    error: '',
    isLoading: false
};

jest.mock('../hooks', () => ({
    useData: () => ({ ...mockData })
}));

describe('Home', () => {
    it('should render container', () => {
        render(<Home />);
        const container = screen.getByTestId('container');
        expect(container).toBeInTheDocument();
    });

    it('should display box with background color', () => {
        render(<Home />);
        const box = screen.getByTestId('box');
        expect(box).toHaveStyle('background: #8080802e');
    });

    it('should display error message', () => {
        mockData.error = 'Error';
        render(<Home />);
        const errorMessage = screen.getByTestId('error-message');
        expect(errorMessage).toBeInTheDocument();
    });
});
