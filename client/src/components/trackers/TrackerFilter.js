import React, { useContext, useEffect, useRef } from 'react';
import TrackerContext from '../../context/tracker/trackerContext';
import { FILTER_TRACKERS, CLEAR_FILTER } from './../../context/types';


const TrackerFilter = () => {
    const trackerContext = useContext(TrackerContext)
    const { filterTrackers, clearFilter, filtered  } = trackerContext;
    const text = useRef('');

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    })
    
    const onChange = e => {
        if(text.current.value !== '') {
            filterTrackers(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder='Search Record' onChange={onChange} />
        </form>
    )
}

export default TrackerFilter;
