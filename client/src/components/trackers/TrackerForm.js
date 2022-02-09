import React, { useState, useContext, useEffect  } from 'react';
import TrackerContext from './../../context/tracker/trackerContext';

const TrackerForm = () => {
    const trackerContext = useContext(TrackerContext);
    const { addTracker, current, clearCurrent, updateTracker } = trackerContext;

    useEffect(() => {
        if(current !== null) {
            setTracker(current)
        } else {
            setTracker({
                amount: '',
                desc: ''
            })
        }
    },[trackerContext, current])

    const [ tracker, setTracker ] = useState({
        amount: '',
        desc: ''
    });

    const { amount, desc } = tracker;
 
    const onChange = e => setTracker({...tracker, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addTracker(tracker);
        } else {
            updateTracker(tracker)
        }
        clearAll()
    }

    const clearAll = () => {
        clearCurrent();
    }
  
    return (
        <form onSubmit={onSubmit} >
            <h2 className='text-primary' >{current ? 'Edit Record' : 'Add Record'}</h2>
            <input
                type='text' 
                name='amount'
                value={amount}
                placeholder='Amount'
                onChange={onChange}
            />
            <input
                type='text' 
                name='desc'
                value={desc}
                placeholder='Description'
                onChange={onChange}
            />
            <div>
                <input type="submit" value={current ? 'Update Record' : 'Add Record'} className='btn btn-primary btn-block' />
            </div>
            {current && <div>
                <button className="btn btn-dark btn-block" 
                onClick={clearAll}
                >Clear</button>
            </div>}
         </form>
    )
}

export default TrackerForm
