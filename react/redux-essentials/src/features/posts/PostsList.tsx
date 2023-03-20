import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { PostsState, InitialState, fetchPosts } from './postsSlice';

export const PostsList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const postStatus = useSelector((state: RootState) => state.posts.status);

  useEffect(() => {
    console.log(postStatus);

    if (postStatus === 'idle') {
      console.log('idle');
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const posts = useSelector((state: RootState) => state.posts);

  const renderedPosts = posts.posts.map((post: PostsState) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
