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

 export default (state, action) => {
     switch(action.type) {
        case ADD_TRACKER:
            return {
                 ...state,
                 trackers: [...state.trackers, action.payload]
             }
        case UPDATE_TRACKER:
            return {
                ...state,
                trackers: state.trackers.map(tracker => tracker.id === action.payload.id ? action.payload : tracker)
            }
        case DELETE_TRACKER:
            return {
                ...state,
                trackers: state.trackers.filter(tracker => tracker.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FILTER_TRACKERS:
            return {
                ...state,
                filtered: state.trackers.filter(tracker => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    // console.log(typeof(regex));
                    // tracker.amount = tracker.amount.toString();
                    // console.log(isNaN(tracker.amount));
                    // return tracker.amount.match(regex) || 
                    return tracker.desc.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
         default:
            return state;
     }
 }