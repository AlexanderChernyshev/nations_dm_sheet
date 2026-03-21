import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface DateState {
  year?: number;
  month?: string;
  day?: number;
}

// Define the initial state using that type
const initialState: DateState = {};

export const dateSlice = createSlice({
  name: "date",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMonth: (state, action: PayloadAction<string>) => {
      state.month = action.payload;
    },
    setDay: (state, action: PayloadAction<number>) => {
      state.day = action.payload;
    },
  },
});

export const { setYear, setMonth, setDay } = dateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default dateSlice.reducer;
