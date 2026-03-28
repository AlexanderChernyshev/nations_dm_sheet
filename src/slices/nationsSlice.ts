import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NationState {
  id: number;
  flagId: number | null;
  name: string;
  color: string;
}

interface NationsState {
  nations: NationState[];
}

function getRandID() {
  const min: number = 1;
  const max: number = 999;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const initialState: NationsState = {
  nations: [
    { id: getRandID(), flagId: null, name: "", color: "#000000" },
    { id: getRandID(), flagId: null, name: "", color: "#000000" },
    { id: getRandID(), flagId: null, name: "", color: "#000000" },
  ],
};

export const nationsSlice = createSlice({
  name: "nations",
  initialState,
  reducers: {
    addNation: (state) => {
      state.nations.push({
        id: getRandID(),
        flagId: null,
        name: "",
        color: "#000000",
      });
    },
    removeNation: (state, action: PayloadAction<number>) => {
      state.nations = state.nations.filter((n) => n.id !== action.payload);
    },
    setFlagId: (
      state,
      action: PayloadAction<{ id: number; flagId: number | null }>
    ) => {
      const nation = state.nations.find((n) => n.id === action.payload.id);
      if (nation) {
        nation.flagId = action.payload.flagId;
      }
    },
    setName: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const nation = state.nations.find((n) => n.id === action.payload.id);
      if (nation) {
        nation.name = action.payload.name;
      }
    },
    setColor: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const nation = state.nations.find((n) => n.id === action.payload.id);
      if (nation) {
        nation.color = action.payload.color;
      }
    },
  },
});

export const { addNation, removeNation, setFlagId, setName, setColor } =
  nationsSlice.actions;

export default nationsSlice.reducer;
