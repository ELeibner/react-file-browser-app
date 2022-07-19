import { render, screen } from '@testing-library/react';
import { File } from './File';

describe('File component', () => {
    const mockData = { id: 1, name: 'file_name' };

    it.each(['file-item', 'file-icon', 'file-name'])(
        'should display %s in the document',
        (item) => {
            render(<File data={mockData} />);
            const element = screen.getByTestId(`${item}-${mockData.id}`);
            expect(element).toBeInTheDocument();
        }
    );
});
