import { render, screen } from '@testing-library/react';
import { ItemList } from './ItemList';

describe('ItemList component', () => {
    const setup = (isLoading = false) => {
        return render(
            <ItemList
                {...{
                    data: {
                        id: 0,
                        name: '',
                        subfolders: [],
                        files: []
                    },
                    isLoading
                }}
            />
        );
    };

    it('should display item list', () => {
        setup();
        const list = screen.getByTestId('list');
        expect(list).toBeInTheDocument();
    });

    it('should display progress bar when data is loading', () => {
        setup(true);
        const list = screen.getByTestId('circular-progress');
        expect(list).toBeInTheDocument();
    });
});
