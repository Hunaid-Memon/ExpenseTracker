import React from 'react';
import TrackerFilter from '../trackers/TrackerFilter';
import Trackers from '../trackers/Trackers';
import TrackerForm from './../trackers/TrackerForm';


const Home = () => {
    return (
        <div className='grid-2' >
            <div>
                <TrackerForm />
            </div>
            <div>
                <TrackerFilter />
                <Trackers />
            </div>
        </div>
    )
}

export default Home;
