import {createSlice} from '@reduxjs/toolkit';

interface IUserSlice {
  mainInfo: any;
}

const initialState: IUserSlice = {
  mainInfo: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
