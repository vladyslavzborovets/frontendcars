import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'
// import Footer from './components/footer.js'

//
// import Add from './components/Add.js'
// import Edit from './components/Edit.js'

// const backend_url_prefix = "https://natl-parks-r-us-back.herokuapp.com/api"
const backend_url_prefix = "http://localhost:8000/api"
const matchEverythingRegex = /.*/gi

const App = () => {
    const mapContainerRef = useRef(null);
    const [cars, setCars] = useState([])

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

    const handleDelete = (event) => {
        axios
            .delete(backend_url_prefix + '/cars/' + event.target.value)
            .then((response) => {
                getCars()
            })
    }

    const handleUpdate = (editCar) => {
        console.log(editCar);
        axios
            .put(backend_url_prefix + '/cars/' + editCar.id, editCar)
            .then((response) => {
                getCars()
            })
    }

    const openModalButton = (modalId) => {
        let modal = document.getElementById(modalId)
        if (modal.style.display !== 'block') {
            modal.style.display = 'block'
        }
    }

    const closeModalButton = (event) => {
        event.stopPropagation()
        let modal = document.getElementsByClassName('modal')
        for (let i = 0; i < modal.length; i++){
           modal[i].style.display = "none"
        }
    }

    useEffect(() => {
        getCars();
    }, [])


    return (
        <>
            <h1 id="header"> Fastes and most Powerfull cars on a planet </h1>
            <h2 id="subhead"> Top 10 Fastes Cars </h2>
            <div className="cars">
                    {cars
                    .map((car) => {
                        return (

                            <>
                                <h4>{car.model}</h4>
                                <h4>{car.make}</h4>
                                <img className="img" src={car.image} />
                                <h3>{car.hp}</h3>
                                <h3>{car.history_of_production}</h3>
                            </>


                        )
                    })}
            </div>
            
        </>
    )
}

export default App;
