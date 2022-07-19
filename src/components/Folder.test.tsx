import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Folder } from './Folder';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));

describe('Folder component', () => {
    const mockData = { id: 1, name: 'folder_name' };
    const setup = () => render(<Folder data={mockData} />);

    it.each(['folder-item', 'folder-icon', 'folder-name'])(
        'should display %s in the document',
        (item) => {
            setup();
            const element = screen.getByTestId(`${item}-${mockData.id}`);
            expect(element).toBeInTheDocument();
        }
    );

    it('should navigate to folder when clicked', async () => {
        setup();
        const folderName = screen.getByTestId(`folder-name-${mockData.id}`);
        await userEvent.click(folderName);

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith(
            `/folder/${mockData.id}`
        );
    });
});
