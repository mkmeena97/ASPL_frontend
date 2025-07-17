import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../features/accounts/accountSlice';

const Accounts = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  return (
    <div>
      <h2>Account List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((acc) => (
          <li key={acc.id}>{acc.accountNumber} — {acc.balance}</li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
