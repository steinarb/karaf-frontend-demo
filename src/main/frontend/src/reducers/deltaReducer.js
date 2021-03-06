import { createReducer } from '@reduxjs/toolkit';
import {
    DELTA_MODIFY,
} from '../actiontypes';

const deltaReducer = createReducer(1, {
    [DELTA_MODIFY]: (state, action) => parseInt(action.payload) || 0,
});

export default deltaReducer;
