import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './index.css';
// import "tailwindcss/tailwind.css";
import Add from './components/Add.js';

// import './index.css';

// const backend_url_prefix = ""
const backend_url_prefix = "http://localhost:8000/api"


const App = () => {
    const mapContainerRef = useRef(null);
    const [cars, setCars] = useState([]);

    const getCars = () => {
        axios
        .get(backend_url_prefix + '/cars')
        .then(
            (response) => setCars(response.data),
            (error) => console.error(error)
        )
        .catch((error)=> console.error(error))
    }


    const handleCreate = (addCar) => {
        axios
        .post(backend_url_prefix + '/cars', addCar)
        .then((response) => {
            console.log(response);
            getCars()
        })
    }



    useEffect(() => {
        getCars();
    }, [])


    return (
        <>


        <h1 className='bg-black dark:bg-white text-white text-center font-semibold text-5xl'> Fastes and most Powerfull cars on a planet </h1>
        <h2 className='decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent text-2xl text-center text-black'> Fastes Cars </h2>
        <div className="bg-gray-900 bg-opacity-55 ">
        {cars
            .map((car) => {
                return (

                    <div className='grid gap-4 grid-cols-3'>

                    <h4 className='font-oblique tracking-widest text-white text-3xl'>Make: {car.make}</h4>
                    <h4 className='font-normal tracking-widest text-white text-2xl'>Model: {car.model}</h4>
                    <h3 className='font-normal tracking-widest oldstyle-nums text-white text-2xl'>Horse Power: {car.hp}</h3>
                    <h3 className='font-normal tracking-widest text-white underline'>Country Of Production: {car.made_by}</h3>
                    <img className='border-double border-4 border-light-blue-500' src={car.image} />
                    <h2 className='italic font-semibold text-xm overflow-ellipsis overflow-hidden text-yellow-600'>{car.history_of_productions}</h2>

                    </div>


                )
            })}
            <details>
            <summary className='text-center text-white'>Do you know faster cars? Add them bellow</summary>
            <Add handleCreate={handleCreate} />

            </details>

            </div>


            </>
        )
    }

    export default App;
