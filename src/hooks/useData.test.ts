import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { api } from '../api';
import { initData, useData } from './useData';

const mockData = {
    data: [
        {
            id: 1,
            name: 'folder'
        }
    ],
    error: null,
    isLoading: false
};

describe('useData hook', () => {
    it('should return data', async () => {
        const mock = new MockAdapter(api);

        mock.onGet('/folder/1').reply(200, mockData.data);

        const { result, waitForNextUpdate } = renderHook(() => useData(1));

        expect(result.current).toEqual({
            ...mockData,
            data: initData,
            isLoading: true
        });

        await waitForNextUpdate();
        expect(result.current).toEqual(mockData);
    });

    it('should return error', async () => {
        const mock = new MockAdapter(api);

        mock.onGet('/folder/1').replyOnce(500);

        const { result, waitForNextUpdate } = renderHook(() => useData(1));

        expect(result.current).toEqual({
            ...mockData,
            data: initData,
            isLoading: true
        });

        await waitForNextUpdate();
        expect(result.current.error).not.toBeNull();
    });
});
