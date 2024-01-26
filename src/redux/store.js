import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import fieldsReducer from './fieldsReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  fields: fieldsReducer,
  data: dataReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
