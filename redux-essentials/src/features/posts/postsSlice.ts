import { createSlice } from '@reduxjs/toolkit';

export interface PostsState {
  id: string;
  title: string;
  content: string;
}

const initialState: PostsState[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsAdded(state, action) {
      state.push(action.payload);
    }
  }
});

export const { postAdded }: any = postsSlice.actions;

export default postsSlice.reducer;
