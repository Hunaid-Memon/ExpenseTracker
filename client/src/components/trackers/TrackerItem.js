import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import TrackerContext from '../../context/tracker/trackerContext'


const TrackerItem = ({ tracker }) => {
    const trackerContext = useContext(TrackerContext);

    const { deleteTracker, setCurrent, clearCurrent } = trackerContext;

    const onDelete = () => {
        deleteTracker(id);
        clearCurrent();
    }

    const { id, amount, desc } = tracker;

    return (
        <div className='card bg-light' >
            <h3 className=' text-primary text-left' style={{paddingBottom: '12px'}} >
                Rs. {amount} {' '} 
                <span className='' style={{ float: 'right'}} >
                    {desc.charAt(0).toUpperCase() + desc.slice(1)}
                </span>
            </h3>
            <p>
                <button className='btn btn-dark btn-sm' onClick={() => setCurrent(tracker) } >Edit</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete} >Delete</button>
            </p>
        </div>
    )
}

TrackerItem.propTypes = {
    Tracker: PropTypes.object.isRequired,
}

export default TrackerItem
