import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from '../hooks/useCustomHook';

describe('useCustomHook', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should handle login/logout flow', async () => {
    const mockUser = { id: '1', name: 'Test User' };
    const { result, waitForNextUpdate } = renderHook(() => useCustomHook());

    // Test initial state
    expect(result.current.user).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();

    // Mock successful login
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser),
      })
    );

    await act(async () => {
      result.current.login({ email: 'test@example.com', password: 'password' });
      await waitForNextUpdate();
    });

    expect(result.current.user).toEqual(mockUser);
    expect(localStorage.getItem('auth')).toBe(JSON.stringify(mockUser));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();

    // Test logout
    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(localStorage.getItem('auth')).toBeNull();
  });

  it('should handle login error', async () => {
    const errorMessage = 'Invalid credentials';
    const { result, waitForNextUpdate } = renderHook(() => useCustomHook());

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      })
    );

    await act(async () => {
      result.current.login({ email: 'wrong@example.com', password: 'wrong' });
      await waitForNextUpdate();
    });

    expect(result.current.error.message).toBe('ログインに失敗しました');
    expect(result.current.user).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });

  it('should load user from localStorage on mount', () => {
    const mockUser = { id: '2', name: 'Cached User' };
    localStorage.setItem('auth', JSON.stringify(mockUser));

    const { result } = renderHook(() => useCustomHook());
    expect(result.current.user).toEqual(mockUser);
  });
});
