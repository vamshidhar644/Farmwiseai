import { createSlice } from '@reduxjs/toolkit';

/** create reducer */
export const fieldsReducer = createSlice({
  name: 'fields',
  initialState: {
    queue: [], //stores the fields
  },
  reducers: {
    fieldAction: (state, action) => {
      let { field } = action.payload;
      return {
        ...state,
        queue: field,
      };
    },
  },
});

export const { startFieldAction } = fieldsReducer.actions;

export default fieldsReducer.reducer;
