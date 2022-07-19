import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

const mockedUsedNavigate = jest.fn();
let mockUseLocation: Partial<Location>;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => mockUseLocation
}));

describe('Header component', () => {
    it('should not display arrow-back when in root folder', () => {
        mockUseLocation = {
            pathname: '/'
        };
        render(<Header />);
        const icon = screen.queryByTestId('arrow-back-icon');
        expect(icon).not.toBeInTheDocument();
    });

    it('should navigate back when clicking on arrow-back icon', async () => {
        mockUseLocation = {
            pathname: '/folder/1'
        };

        render(<Header />);
        const icon = screen.getByTestId('arrow-back-icon');
        await userEvent.click(icon);
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
});
