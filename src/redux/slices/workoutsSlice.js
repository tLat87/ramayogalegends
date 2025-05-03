import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workouts: [],
};

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },
    removeWorkout: (state, action) => {
      state.workouts = state.workouts.filter(workout => workout.id !== action.payload);
    },
    updateWorkout: (state, action) => {
      const index = state.workouts.findIndex(workout => workout.id === action.payload.id);
      if (index !== -1) {
        state.workouts[index] = action.payload;
      }
    },
  },
});

export const { addWorkout, removeWorkout, updateWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
