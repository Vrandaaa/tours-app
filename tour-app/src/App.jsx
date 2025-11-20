import { useState } from 'react'
import './App.css'
import React from 'react'
import data from './components/data'
import Tours from './components/Tours'
const App = () => {

    const [tours, setdata] = useState(data);
    function removeTourHandler(id)
    {
        const newTours = tours.filter((tour) => tour.id !==id)
        setdata(newTours);
    }  
    if(tours.length==0){
        return(
            <div className='refresh-page'>
                <h2 className="no-tour-heading">no tours left</h2>
                <p className="btn-refresh" onClick={()=>setdata(data)}>refresh</p>
            </div>
        );
    }
    return(
        <div className="wrapper">
            <Tours tours={tours} removeTourHandler={removeTourHandler}></Tours>
        </div>
    );
}

export default App
