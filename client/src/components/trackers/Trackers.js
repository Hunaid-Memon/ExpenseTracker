import React, { Fragment, useContext } from 'react';
import TrackerContext from '../../context/tracker/trackerContext';
import TrackerItem from './TrackerItem';

const Trackers = () => {
    const trackerContext = useContext(TrackerContext);

    const { trackers, filtered } = trackerContext;

    if(trackers.length === 0) {
        return <h4>Please use the form to add a Records</h4>
    }
    
    return (
        <Fragment>
            {filtered !== null ? filtered.map( tracker => (
                <TrackerItem key={tracker.id} tracker={tracker} />
            )) :
                trackers.map( tracker => (
                <TrackerItem key={tracker.id} tracker={tracker} />
            ))
        }     
        </Fragment>
    )
}

export default Trackers
