import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
  username: string;
}

export const Users = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users/');

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>User</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
