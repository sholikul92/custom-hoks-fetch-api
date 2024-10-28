import { useFetch } from '../hooks/useFetch';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
}

export const Posts = () => {
  const { data: posts, loading, error } = useFetch<Posts[]>('https://jsonplaceholder.typicode.com/posts/');
  const { data: users } = useFetch<User[]>(`https://jsonplaceholder.typicode.com/users`);

  const userMapping = (userId: number) => {
    return users?.map((user) => user.id === userId && user.name);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      {posts?.map((post, index) => {
        return (
          <div key={index}>
            <h2>title : {post.title}</h2>
            <h3>author : {userMapping(post.userId)}</h3>
            <p>body : {post.body}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
