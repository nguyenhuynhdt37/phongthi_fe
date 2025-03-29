import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
     fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess,  fetchUserFailure} = userSlice.actions;
export default userSlice.reducer;
