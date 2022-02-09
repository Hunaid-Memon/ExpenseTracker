import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import trackerContext from './trackerContext';
import trackerReducer from './trackerReducer';

import { 
    GET_TRACKERS,
    ADD_TRACKER,
    DELETE_TRACKER,
    SET_CURRENT, 
    CLEAR_CURRENT,
    UPDATE_TRACKER,
    FILTER_TRACKERS,
    CLEAR_TRACKERS,
    TRACKER_ERROR,
    CLEAR_FILTER
 } from '../types';

const TrackerState = props => {
    const initialState = {
        trackers: [
            {
                id: 1,
                amount: -5000,
                desc: "electricity"
            },
            {
                id: 2,
                amount: -4000,
                desc: "Dinner"
            },
            {
                id: 3,
                amount: 10000,
                desc: "Salary"
            }
        ],
        current: null,
        filtered: null
    }
    const [state, dispatch] = useReducer(trackerReducer, initialState)
    
    // Add Tracker
    const addTracker = tracker => {
        tracker.id = uuidv4();
        dispatch({ type: ADD_TRACKER, payload: tracker })
    }

    // Delete Tracker
    const deleteTracker = id => {
        dispatch({ type: DELETE_TRACKER, payload: id })
    }

    // Set Current Tracker
    const setCurrent = tracker => {
        dispatch({ type: SET_CURRENT, payload: tracker })
    }

    // Clear Current Tracker
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Tracker
    const updateTracker = tracker => {
        dispatch({ type: UPDATE_TRACKER, payload: tracker })
    }

    // Filter Trackers
    const filterTrackers = text => {
        dispatch({ type: FILTER_TRACKERS, payload: text })
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <trackerContext.Provider
            value={{
                    trackers: state.trackers,
                    current: state.current,
                    filtered: state.filtered,
                    addTracker,
                    updateTracker,
                    deleteTracker,
                    setCurrent,
                    clearCurrent,
                    filterTrackers,
                    clearFilter
                }}
        >
            {props.children}
        </trackerContext.Provider>
    )  
}

export default TrackerState;
