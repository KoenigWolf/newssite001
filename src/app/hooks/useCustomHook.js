/**
 * カスタムフック：認証状態とAPIエラーハンドリングを管理
 * 
 * @typedef {Object} HookReturn
 * @property {Object|null} user - 認証ユーザー情報
 * @property {boolean} isLoading - ローディング状態
 * @property {Error|null} error - エラー情報
 * @property {Function} login - ログイン処理
 * @property {Function} logout - ログアウト処理
 * 
 * @returns {HookReturn} 認証関連の状態とメソッド
 * 
 * @example
 * const { user, isLoading, error, login, logout } = useAuth();
 * 
 * @description
 * - 認証状態の管理とAPI通信のエラーハンドリングを一元化
 * - ローカルストレージとの同期処理を内包
 * - ローディング状態の自動管理
 */
const useCustomHook = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) throw new Error('ログインに失敗しました');
      
      const userData = await response.json();
      setUser(userData);
      localStorage.setItem('auth', JSON.stringify(userData));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth');
  };

  React.useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      try {
        setUser(JSON.parse(storedAuth));
      } catch (err) {
        console.error('認証情報の解析に失敗しました:', err);
        logout();
      }
    }
  }, []);

  return { user, isLoading, error, login, logout };
};

export default useCustomHook;
