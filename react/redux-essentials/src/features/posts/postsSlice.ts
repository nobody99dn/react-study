import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export interface PostsState {
  id: string;
  title: string;
  content: string;
}

export interface InitialState {
  posts: PostsState[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  // const res = await client.get('/fetchApi/posts');
  // return res.data;
  return { id: '1', content: 'text', title: 'client' };
});

const initialState: InitialState = {
  posts: [],
  status: 'idle',
  error: undefined
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsAdded(state, action) {
      state.posts.push(action.payload);
    },
    postUpdated(state, action: PayloadAction<PostsState>) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        console.log('loading');

        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        console.log('fullfil');

        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        console.log('failed');

        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { postsAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state: InitialState) => state.posts;

export const selectPostById = (state: InitialState, postId: string) =>
  state.posts.find((post) => post.id === postId);
