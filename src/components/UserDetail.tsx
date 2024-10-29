import { useFetch } from '../hooks/useFetch';
import { useParams, useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  website: string;
}

export const UserDetail = () => {
  const { id } = useParams();
  const { data: user, loading, error } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

  const navigate = useNavigate();

  const previousPage = () => {
    navigate(-1);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>{user?.name}</h1>
      <p>
        address : {user?.address.street} - {user?.address.city}
      </p>
      <p>email : {user?.email}</p>
      <p>website : {user?.website}</p>
      <button onClick={previousPage}>back</button>
    </>
  );
};
