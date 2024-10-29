import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  username: string;
}

export const Users = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users/');
  const navigate = useNavigate();

  const showDetailUser = (userId: number) => {
    navigate(`/user/${userId}`);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>User</h1>
      <table>
        {users?.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}.</td>
            <td>{user.name}</td>
            <td>
              <button onClick={() => showDetailUser(user.id)}>detail</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
