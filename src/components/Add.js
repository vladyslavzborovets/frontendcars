import React, { useState, useEffect } from 'react'

const Add = (props) => {
    const [car, setCar] = useState({...props.car})

    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(car)
        setCar({ model: '', make: '', image: '', made_by: '', hp: '', history_of_productions: '' } )
    }

    return (
        <div class="text-center">

            <form onSubmit={handleSubmit} className="create">
                <label className='text-white' htmlFor="model">Model: </label>
                <input className='text-white border-solid border-4 border-red-500 text-center rounded-lg'type="text" name="model" value={car.model} onChange={handleChange}/>
                <label className='text-white' htmlFor="make">Make: </label>
                <input className='rounded-lg text-white border-solid border-4 border-red-500 text-center'  type="text" name="make" value={car.make} onChange={handleChange}/>
                <label className='text-white ' htmlFor="image">Image: </label>
                <input className='rounded-lg text-white border-solid border-4 border-red-500'  type="text" name="image" value={car.image} onChange={handleChange}/>
                <label className='text-white' htmlFor="made_by">Country of Production: </label>
                <input className='rounded-lg text-white border-solid border-4 border-red-500'  type="text" name="made_by" value={car.made_by} onChange={handleChange}/>
                <label className='text-white' htmlFor="hp">Horse Power: </label>
                <input className='rounded-lg text-white border-solid border-4 border-red-500'  type="number" name="hp" value={car.hp} onChange={handleChange}/>
                <br/>
                <label className='text-white' htmlFor="history_of_productions">History Of Productions: </label>
                <input className='rounded-lg text-white border-solid border-4 border-red-500' type="text" name="history_of_productions" value={car.history_of_productions} onChange={handleChange}/>
                <br/>
                <input className='rounded text-center' type="submit" />
                <br/>
            </form>

        </div>

    )
}

export default Add
