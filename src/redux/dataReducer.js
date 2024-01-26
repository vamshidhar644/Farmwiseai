import { createSlice } from '@reduxjs/toolkit';

/** create reducer */
export const dataReducer = createSlice({
  name: 'data',
  initialState: {
    section: [],
    department: [],
    mobile: [],
    dob: [],
    pincode: [],
  },
  reducers: {
    dataAction: (state, action) => {
      let { section, department, mobile, dob, pin } = action.payload;
      return {
        ...state,
        section: section,
        department: department,
        mobile: mobile,
        dob: dob,
        pincode: pin,
      };
    },
  },
});

export const { dataAction } = dataReducer.actions;

export default dataReducer.reducer;
